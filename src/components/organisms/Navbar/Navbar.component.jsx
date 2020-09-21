import React from 'react';
import { NavbarWrapper } from './Navbar.styled';
import { ReactComponent as LogoIcon } from '../../../resources/svg/logo_icon.svg';
import { Title } from '../../fonts';
import { SearchBar } from '../../molecules/SearchBar/SearchBar.component';

export const Navbar = ({ action }) => (
  <NavbarWrapper>
    <div className='logo-container'>
      <LogoIcon />
      <Title>Explorer</Title>
    </div>
    <SearchBar action={action} />
  </NavbarWrapper>
);
