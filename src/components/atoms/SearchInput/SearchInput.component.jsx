import React from 'react';
import { SearchInputWrapper } from './SearchInput.styled';
import { ReactComponent as SearchIcon } from '../../resources/svg/search_icon.svg';

export const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <SearchIcon />
      <input type='text' />
    </SearchInputWrapper>
  );
};
