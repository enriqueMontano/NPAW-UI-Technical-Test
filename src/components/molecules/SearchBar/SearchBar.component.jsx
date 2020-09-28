import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchBarWrapper } from './SearchBar.styled';
import { ReactComponent as SearchIcon } from '../../../resources/svg/search_icon.svg';
import { Input, SearchButton } from '../../atoms';

export const SearchBar = ({ action }) => {
  const inputRef = useRef(null);
  let history = useHistory();

  return (
    <SearchBarWrapper>
      <div className='label-container'>
        <SearchIcon />
        <Input ref={inputRef} placeHolder='Enter a user name' name='search' />
      </div>
      <div className='button-container'>
        <SearchButton
          onClick={() => {
            history.push('/');
            if (inputRef.current) {
              action(inputRef.current.value);
            }
          }}
        >
          Search
        </SearchButton>
      </div>
    </SearchBarWrapper>
  );
};
