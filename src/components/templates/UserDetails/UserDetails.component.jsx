import React from 'react';
import { UserDetailsWrapper } from './UserDetails.styled';

export const UserDetails = ({ data }) => (
  <UserDetailsWrapper>
    {console.log(data)}
    user_details
    <img src={data.avatar_url} alt='' />
  </UserDetailsWrapper>
);
