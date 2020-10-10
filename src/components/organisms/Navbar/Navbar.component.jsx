import React from 'react';
import { NavbarWrapper } from './Navbar.styled';
import { ReactComponent as LogoIcon } from '../../../resources/svg/logo_icon.svg';
import { Title } from '../../fonts';
import { SearchBar } from '../../molecules';

export const Navbar = ({ action, error }) => (
  <NavbarWrapper>
    <div className='logo-container'>
      <LogoIcon />
      <Title>Explorer</Title>
    </div>
    <SearchBar action={action} error={error} />
  </NavbarWrapper>
);
