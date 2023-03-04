import tw, { styled } from 'twin.macro';
import { Col, Row, TextPrimary } from './base';
import Pagination from './pagination';
import 'twin.macro';
import LinkIcon from './icons/link';
import PersonIcon from './icons/person';

interface PhotoViewerProps {
    photos: Photo[]
    currentPage: number;
    setCurrentPage: (p: number) => void;
    loading?: boolean;
}

const PhotoViewer: React.FC<PhotoViewerProps> = ({ photos, currentPage, setCurrentPage, loading }) => {
    if (loading) {
        return (
            <Col>
                <Row tw="w-full items-start">
                    <PhotoWithDetailsPlaceholder first />
                    {Array(9).fill(null).map((_p, i) => <PhotoWithDetailsPlaceholder key={`placeholder-${i}`}/>)}
                </Row>
            </Col>
        )
    }

    if (!photos || photos.length === 0) {
        return <Row tw="w-full justify-center text-gray-500 dark:text-white">no results</Row>
    }

    const numPages = Math.ceil(photos.length / 10);
    const prevPageExists = currentPage > 0;
    const nextPageExists = (currentPage + 1) < numPages;

    const firstPhoto = photos[currentPage * 10 + 0];
    const firstPhotoSrc = firstPhoto.src.large;
    const firstPhotoPhotogName = firstPhoto.photographer;
    const firstPhotoPhotogUrl = firstPhoto.photographer_url
    const firstPhotoOriginalUrl = firstPhoto.src.original;

    return (
        <Col>
            <Row tw="w-full items-start">
                <PhotoWithDetails
                    first
                    src={firstPhotoSrc}
                    photographerName={firstPhotoPhotogName}
                    photographerUrl={firstPhotoPhotogUrl}
                    originalUrl={firstPhotoOriginalUrl}
                />
                {photos.slice(currentPage * 10 + 1, (currentPage+1) * 10).map((p) => {
                    return (
                        <PhotoWithDetails
                            key={`photo-${p.id}`}
                            src={p.src.large}
                            photographerName={p.photographer}
                            photographerUrl={p.photographer_url}
                            originalUrl={p.src.original}
                        />
                    )
                })}
            </Row>
            <Pagination
                numPages={numPages}
                currentPage={currentPage}
                prevPageExists={prevPageExists}
                nextPageExists={nextPageExists}
                setCurrentPage={setCurrentPage}
            />
        </Col>
    )
}

export default PhotoViewer;

interface PhotoWithDetailsProps {
    src: string;
    photographerName: string;
    photographerUrl: string;
    originalUrl: string;
    first?: boolean;
}

const PhotoWithDetails: React.FC<PhotoWithDetailsProps> = ({src, photographerName, photographerUrl, originalUrl: photoOriginalUrl, first }) => {
    return (
        <PhotoContainer first={first}>
            <StyledImgAnchor href={photographerUrl} target="_blank" rel="noopener noreferrer">
                <StyledImg src={src}/>
            </StyledImgAnchor>
            <Row tw="justify-start flex-nowrap items-center w-full h-8">
                <Row tw="w-8 h-4 fill-gray-400">
                    <PersonIcon/>
                </Row>
                <a href={photographerUrl} target="_blank" rel="noopener noreferrer">
                    <TextPrimary tw="text-xs font-semibold cursor-pointer duration-100 hover:font-bold hover:text-black dark:hover:text-white">
                        {photographerName.length > 16 ? `${photographerName.slice(0, 16)}...` : photographerName}
                    </TextPrimary>
                </a>
            </Row>
            <Row tw="justify-start flex-nowrap items-center w-full drop-shadow-sm">
                <Row tw="w-8 h-4 fill-gray-400">
                    <LinkIcon/>
                </Row>
                <a href={photoOriginalUrl} target="_blank" rel="noopener noreferrer">
                    <TextPrimary tw="text-xs cursor-pointer duration-100 hover:font-semibold hover:text-black dark:hover:text-white">Source</TextPrimary>
                </a>
            </Row>
        </PhotoContainer>
    )
}

interface PhotoWithDetailsPlaceholderProps {
    first?: boolean;
}

const PhotoWithDetailsPlaceholder: React.FC<PhotoWithDetailsPlaceholderProps> = ({ first }) => {
    return (
        <PhotoContainer first={first} tw="animate-pulse">
            <PlaceholderImg/>
            <Row tw="justify-start flex-nowrap items-center w-full h-8">
                <Row tw="w-8 h-4 fill-gray-500">
                    <PersonIcon/>
                </Row>
                    <TextPrimary tw="text-xs text-gray-700 font-semibold cursor-pointer hover:font-bold hover:text-black">
                        ...
                    </TextPrimary>
            </Row>
            <Row tw="justify-start flex-nowrap items-center w-full drop-shadow-sm">
                <Row tw="w-8 h-4 fill-gray-500">
                    <LinkIcon/>
                </Row>
                <TextPrimary tw="text-xs text-gray-900 cursor-pointer hover:font-semibold hover:text-black">
                    ...
                </TextPrimary>
            </Row>
        </PhotoContainer>
    )
}

const PhotoContainer = styled(Col)<{first?: boolean}>(({first}) => [
    tw`
        p-1
        w-1/3
        md:w-1/5
        aspect-square
        md:aspect-[3/4]
        rounded-lg
        flex-nowrap
        pb-4
        space-y-1
    `,
    first && tw`
        w-full
        md:w-1/5
    `
])

const StyledImg = styled.img(() => [
    tw`
        h-full
        rounded-md
        drop-shadow-sm
        overflow-hidden
        aspect-square
        object-cover
    `
])

const StyledImgAnchor = styled.a(() => [
    tw`
        h-full
        duration-200
        hover:-translate-y-1
    `
])

const PlaceholderImg = styled(StyledImg)(() => [
    tw`
        bg-gray-300
        animate-pulse
        duration-75
    `
])