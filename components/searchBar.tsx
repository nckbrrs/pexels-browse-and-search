import tw, { styled } from 'twin.macro';
import { Row  } from './base';
import 'twin.macro';
import { FormEvent } from 'react';

const StyledInput = styled.input(() => [
    tw`
        w-full
        p-4
        md:pl-8
        text-sm
        text-[#212121]
        border
        border-gray-200
        rounded-lg
        bg-gray-50
        duration-100
    `
])

const StyledButton = styled.button(() => [
    tw`
        absolute
        px-4
        py-2.5
        text-white
        text-sm
        font-medium
        top-2
        bottom-2
        right-3
        rounded-md
        duration-200
        !bg-indigo-600
        hover:!bg-indigo-700
        hover:shadow-md
        hover:bottom-3.5
    `
]);

interface SearchBarProps {
    handleSearch: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
    return (
        <Row tw="relative px-1">
            <form tw="w-full" onSubmit={handleSearch}>
                <StyledInput type="search" id="search-input" placeholder="Search for more free photos"></StyledInput>
                <StyledButton type="submit">Search</StyledButton>
            </form>
        </Row>
    )
}

export default SearchBar;


