import { FormEvent, useEffect, useState } from 'react';
import Head from 'next/head'
import { Col } from '../components/base';
import 'twin.macro';
import SearchBar from '../components/searchBar';
import PhotoViewer from '../components/photoViewer';

const SERVER_BASE_PATH = 'https://pexels-project.vercel.app/api'

// Home page
const Home: React.FC = () => {
  const [photosData, setPhotosData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loadingResults, setLoadingResults] = useState<boolean>(false);
  const sessionStorage = (typeof window !== 'undefined') ? window.sessionStorage : null;

  useEffect(() => {
    const latestSearchQuery = getLatestSearchQueryFromSessionStorage(sessionStorage);
    if (latestSearchQuery && latestSearchQuery !== '') {
      const locallyStoredSearchQueryResult = getSearchResultFromSessionStorage(sessionStorage, latestSearchQuery);
      if (locallyStoredSearchQueryResult) {
        setPhotosData(locallyStoredSearchQueryResult)
      }
    } else {
      const locallyStoredCuratedResult = getCuratedResultFromSessionStorage(sessionStorage);
      if (locallyStoredCuratedResult) {
        setPhotosData(locallyStoredCuratedResult)
      } else {
        setLoadingResults(true);
        fetchCurated();
      }
    }

    const currentPageFromSession = getCurrentPageFromSessionStorage(sessionStorage);
    if (currentPageFromSession) {
      setCurrentPage(currentPageFromSession)
    }
  }, [])

  const fetchCurated = async () => {
    const fetchResponse = await fetch(`${SERVER_BASE_PATH}/curated`, {
      method: 'GET',
    }).then((res) => res.json())
    setCuratedResultInSessionStorage(sessionStorage, fetchResponse);
    setPhotosData(fetchResponse);
    setLoadingResults(false);
  }

  const fetchBySearchQuery = async (searchQuery: string) => {
    const fetchResponse = await fetch(`${SERVER_BASE_PATH}/search?` + new URLSearchParams({ searchQuery }), {
      method: 'GET',
    }).then((res) => res.json());
    setSearchResultInSessionStorage(sessionStorage, searchQuery, fetchResponse);
    setPhotosData(fetchResponse);
    setLoadingResults(false);
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
      setLoadingResults(true);
      e.preventDefault();
      const searchInput = document.getElementById('search-input') as HTMLInputElement
      setLatestSearchQueryInSessionStorage(sessionStorage, searchInput.value);
      if (searchInput.value && searchInput.value !== '') {
        const locallyStoredQueryResult = getSearchResultFromSessionStorage(sessionStorage, searchInput.value);
        if (locallyStoredQueryResult) {
          setPhotosData(locallyStoredQueryResult);
          setLoadingResults(false);
        } else {
          setPhotosData(null);
          fetchBySearchQuery(searchInput.value);
        }
      } else {
        const locallyStoredCuratedResult = getCuratedResultFromSessionStorage(sessionStorage);
        if (locallyStoredCuratedResult) {
          setPhotosData(locallyStoredCuratedResult)
          setLoadingResults(false);
        } else {
          setPhotosData(null);
          fetchCurated();
        }
      }

      setCurrentPage(0);
      // sessionStorage?.setItem('pexels@@@currentPage', '0')
      setCurrentPageInSessionStorage(sessionStorage, currentPage)
  }

  return (
    <>
      <Head>
        <title>Pexels by Nick Barrs</title>
      </Head>
      <Col tw="w-full h-full flex-1 justify-start flex-nowrap space-y-2 md:space-y-4">
        <SearchBar handleSearch={handleSearch}/>
        <PhotoViewer
            loading={loadingResults}
            photos={photosData?.photos}
            currentPage={currentPage}
            setCurrentPage={(p) => {
              setCurrentPage(p); 
              // sessionStorage?.setItem('pexels@@@currentPage', p.toString())
              setCurrentPageInSessionStorage(sessionStorage, p)
            }}
          />
      </Col>
    </>
  )
}

export default Home;

const setSearchResultInSessionStorage = (sessionStorage: Storage | null, query: string, data: any): void => {
  sessionStorage?.setItem(`pexels:${query.replace(' ', '-')}`, JSON.stringify(data));
}

const getSearchResultFromSessionStorage = (sessionStorage: Storage | null, query: string): any => {
  const resultFromStorage = sessionStorage?.getItem(`pexels:${query.replace(' ', '-')}`);
  if (resultFromStorage) {
    return JSON.parse(resultFromStorage);
  }
  
  return null;
}

const setCuratedResultInSessionStorage = (sessionStorage: Storage | null, data: any) => {
  sessionStorage?.setItem(`pexels@@@curated`, JSON.stringify(data));
}

const getCuratedResultFromSessionStorage = (sessionStorage: Storage | null) => {
  const resultFromStorage = sessionStorage?.getItem(`pexels@@@curated`);
  if (resultFromStorage) {
    return JSON.parse(resultFromStorage);
  }
  
  return null;
}

const setCurrentPageInSessionStorage = (sessionStorage: Storage | null, p: number) => {
  sessionStorage?.setItem(`pexels@@@currentPage`, p.toString());
}

const getCurrentPageFromSessionStorage = (sessionStorage: Storage | null) => {
  const resultFromStorage = sessionStorage?.getItem(`pexels@@@currentPage`);
  if (resultFromStorage) {
    return Number.parseInt(resultFromStorage);
  }
  
  return null;
}

const setLatestSearchQueryInSessionStorage = (qsessionStorage: Storage | null, query: string) => {
  sessionStorage?.setItem(`pexels@@@latestSearchQuery`, query);

}

const getLatestSearchQueryFromSessionStorage = (sessionStorage: Storage | null) => {
  const resultFromStorage = sessionStorage?.getItem(`pexels@@@latestSearchQuery`);
  if (resultFromStorage) {
    return resultFromStorage;
  }
  
  return null;
}