import React from 'react';
import { UserListWrapper } from './UserList.styled';
import { Card } from '../../organisms';

export const UserList = ({ error, pending, users }) => {
  return (
    <UserListWrapper>
      {console.log(error, pending, users)}
      {users.items && users.items.map((user) => <Card key={user.id} />)}
    </UserListWrapper>
  );
};
