import React from 'react';
import { CardDetails } from '../../organisms';
import { UserDetailsWrapper } from './UserDetails.styled';

export const UserDetails = ({ data }) => (
  <UserDetailsWrapper>
    <CardDetails data={data} />
  </UserDetailsWrapper>
);
