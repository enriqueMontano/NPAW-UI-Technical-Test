import React, { useRef } from 'react';
import { SearchBarWrapper } from './SearchBar.styled';
import { ReactComponent as SearchIcon } from '../../../resources/svg/search_icon.svg';
import { Input, StyledLink } from '../../atoms';

export const SearchBar = ({ action }) => {
  const inputRef = useRef(null);

  return (
    <SearchBarWrapper>
      <div className='label-container'>
        <SearchIcon />
        <Input ref={inputRef} placeHolder='Enter a user name' name='search' />
      </div>
      <div className='button-container'>
        {/* <SearchButton
          onClick={() => {
            if (inputRef.current) {
              action(inputRef.current.value);
              history.goBack();
            }
          }}
        >
          Search
        </SearchButton> */}
        <StyledLink
          to={`/`}
          onClick={() => {
            if (inputRef.current) {
              action(inputRef.current.value);
            }
          }}
        >
          SEARCH
        </StyledLink>
      </div>
    </SearchBarWrapper>
  );
};
