import { Row, TextPrimary } from "./base";
import 'twin.macro';
import ChevronRightIcon from "./icons/chevronRight";
import ChevronLeftIcon from "./icons/chevronLeft";
import tw, { styled } from "twin.macro";

interface PaginationProps {
    numPages: number;
    currentPage: number;
    prevPageExists: boolean;
    nextPageExists: boolean;
    setCurrentPage: (p: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({numPages, currentPage, prevPageExists, nextPageExists, setCurrentPage}) => (
    <Row tw="w-full justify-between pt-4 px-1 select-none">
        <Row tw="w-1/3 justify-start items-center">
            {prevPageExists &&
            <PaginationButton onClick={() => setCurrentPage(currentPage - 1)}>
                <Row tw="w-2 h-3 translate-y-[0.5px] dark:fill-white">
                    <ChevronLeftIcon/>
                </Row>
                <TextPrimary tw="duration-200 text-sm font-semibold text-left">
                    PREV
                </TextPrimary>
            </PaginationButton>
            }
        </Row>
        <Row tw="w-1/3 justify-center items-center">
            <TextPrimary tw="text-center text-xs cursor-default">
                {`page ${currentPage + 1} of ${numPages}`}
            </TextPrimary>
        </Row>

        <Row tw="w-1/3 justify-end items-center ">
            {nextPageExists &&
            <PaginationButton onClick={() => setCurrentPage(currentPage + 1)}>
                <TextPrimary tw="duration-200 text-sm font-semibold text-right">
                    NEXT
                </TextPrimary>
                <Row tw="w-3 h-3 translate-y-[0.5px] dark:fill-white">
                    <ChevronRightIcon/>
                </Row>
            </PaginationButton>
            }
        </Row>
    </Row>
)

export default Pagination;

const PaginationButton = styled(Row)(() => [
    tw`
        items-center
        bg-gray-200
        dark:bg-gray-500
        rounded-lg
        px-2
        py-1
        space-x-1
        cursor-pointer 
        duration-200
        hover:bg-gray-300
        dark:hover:bg-gray-600
        hover:-translate-y-[1px]
        hover:drop-shadow-sm
    `
])