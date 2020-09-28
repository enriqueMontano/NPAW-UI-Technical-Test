import React from 'react';
import { CardWrapper } from './Card.styled';
import { Avatar, StyledLink } from '../../atoms';
import { Subtitle, SubtitleLight } from '../../fonts';

export const Card = ({ action, username, avatar, id }) => (
  <CardWrapper>
    <div className='user-info-container'>
      <Avatar image={avatar} />
      <Subtitle>{username}</Subtitle>
      <SubtitleLight>{id}</SubtitleLight>
    </div>
    <StyledLink to={`/detail/${username}`} onClick={() => action(username)}>
      View More
    </StyledLink>
  </CardWrapper>
);
