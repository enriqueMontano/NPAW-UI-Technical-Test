import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, BackButton, StyledLink } from '../../atoms';
import { Title, Subtitle, SubtitleLight } from '../../fonts';
import { ReactComponent as FollowersIcon } from '../../../resources/svg/followers_icon.svg';
import { ReactComponent as RepositoriesIcon } from '../../../resources/svg/repositories_icon.svg';
import { ReactComponent as LocationIcon } from '../../../resources/svg/location_icon.svg';
import { CardListWrapper, CardDetailsWrapper } from './Card.styled';

export const CardList = ({ action, username, avatar, id }) => (
  <CardListWrapper>
    <div className='user-info-container'>
      <Avatar image={avatar} />
      <Subtitle>{username}</Subtitle>
      <SubtitleLight>{id}</SubtitleLight>
    </div>
    <StyledLink to={`/detail/${username}`} onClick={() => action(username)}>
      View More
    </StyledLink>
  </CardListWrapper>
);

export const CardDetails = ({ data }) => {
  let history = useHistory();

  return (
    <CardDetailsWrapper>
      <div className='avatar-container'>
        <Avatar
          image={data.avatar_url}
          width={`${200}px`}
          height={`${200}px`}
        />
      </div>
      <div className='user-info-container'>
        <Title>{data.name}</Title>
        <Subtitle>{data.bio}</Subtitle>
        <SubtitleLight>
          <FollowersIcon />
          {data.followers} followers - {data.following} following
        </SubtitleLight>
        {data.location && (
          <SubtitleLight>
            <LocationIcon />
            {data.location}
          </SubtitleLight>
        )}
        <SubtitleLight>
          <RepositoriesIcon />
          {data.public_repos} repositories
        </SubtitleLight>
      </div>
      <div className='button-container'>
        <BackButton onClick={() => history.push('/')}>Go Back</BackButton>
      </div>
    </CardDetailsWrapper>
  );
};
