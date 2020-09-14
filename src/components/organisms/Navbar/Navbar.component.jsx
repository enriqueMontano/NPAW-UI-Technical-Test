import React from 'react';
import { NavbarWrapper } from './Navbar.styled';
import { ReactComponent as LogoIcon } from '../../../resources/svg/logo_icon.svg';
import { SearchBar } from '../../molecules/SearchBar/SearchBar.component';

export const Navbar = () => (
  <NavbarWrapper>
    <LogoIcon />
    <SearchBar />
  </NavbarWrapper>
);
