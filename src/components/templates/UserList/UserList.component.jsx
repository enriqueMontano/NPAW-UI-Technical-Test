import React from 'react';
import { UserListWrapper } from './UserList.styled';

export const UserList = ({ error, pending, users }) => {
  return (
    <UserListWrapper>{console.log(error, pending, users)}</UserListWrapper>
  );
};
