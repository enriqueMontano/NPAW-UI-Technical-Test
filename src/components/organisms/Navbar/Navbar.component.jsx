import React from 'react';
import { NavbarWrapper } from './Navbar.styled';
import { ReactComponent as LogoIcon } from '../../../resources/svg/logo_icon.svg';
import { Title } from '../../fonts';
import { UnstyledLink } from '../../atoms';
import { SearchBar } from '../../molecules';

export const Navbar = ({ action, error }) => (
  <NavbarWrapper>
    <div className='logo-container'>
      <UnstyledLink to={'/'}>
        <LogoIcon />
        <Title>Explorer</Title>
      </UnstyledLink>
    </div>
    <SearchBar action={action} error={error} />
  </NavbarWrapper>
);
