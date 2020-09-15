import React from 'react';
import { SearchBarWrapper } from './SearchBar.styled';
import { ReactComponent as SearchIcon } from '../../../resources/svg/search_icon.svg';
import { Input, SearchButton } from '../../atoms';

export const SearchBar = ({ label, action }) => (
  <SearchBarWrapper>
    <div className='label-container'>
      <SearchIcon />
      <Input placeHolder='Enter a user name' name='search' />
    </div>
    <div className='button-container'>
      <SearchButton>Search</SearchButton>
    </div>
  </SearchBarWrapper>
);
