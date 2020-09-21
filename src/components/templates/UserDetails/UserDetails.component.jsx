import React from 'react';
import { UserDetailsWrapper } from './UserDetails.styled';

export const UserDetails = ({ data }) => (
  <UserDetailsWrapper>
    {console.log('UserDetails =>', data)}
    user_details
    {data && <img src={data.avatar_url} alt='' />}
  </UserDetailsWrapper>
);
