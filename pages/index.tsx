import Head from 'next/head'
import { RowCentered, TextPrimary } from '../components/base';
import 'twin.macro';
import { useEffect, useState } from 'react';

const Home: React.FC<{users: any}> = ({ users }) => {
  const [curatedPhotosData, setCuratedPhotosData] = useState<any>(null);

  useEffect(() => {
    const fetchCurated = async () => {
      const fetchResponse = await fetch('/api/curated').then((res) => res.json())
      setCuratedPhotosData(fetchResponse);
    }

    setTimeout(() => {
      fetchCurated();
    }, 1000)
  }, [])

  return (
    <>
      <Head>
        <title>TITLE / Home</title>
      </Head>
      <RowCentered tw="w-full space-x-3">
        {curatedPhotosData &&
          <TextPrimary>got {JSON.stringify(curatedPhotosData.photos)}</TextPrimary>
        }
      </RowCentered>
    </>
  )
}

export default Home