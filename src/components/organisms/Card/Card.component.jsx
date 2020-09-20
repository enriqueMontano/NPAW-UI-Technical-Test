import React from 'react';
import { CardWrapper } from './Card.styled';
import { Avatar, StyledLink } from '../../atoms';

export const Card = ({ action, username }) => (
  <CardWrapper>
    <Avatar />
    <StyledLink to={`/detail/${username}`} onClick={() => action(username)}>
      {username}
    </StyledLink>
  </CardWrapper>
);
