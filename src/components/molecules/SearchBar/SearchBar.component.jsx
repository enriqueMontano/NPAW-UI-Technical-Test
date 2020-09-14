import React from 'react';
import { SearchBarWrapper } from './SearchBar.styled';
import { ReactComponent as SearchIcon } from '../../../resources/svg/search_icon.svg';
import { Input, Button } from '../../atoms';

export const SearchBar = () => (
  <SearchBarWrapper>
    <SearchIcon />
    <Input />
    <Button />
  </SearchBarWrapper>
);
