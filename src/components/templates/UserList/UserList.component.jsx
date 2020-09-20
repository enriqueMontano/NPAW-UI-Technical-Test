import React from 'react';
import { UserListWrapper } from './UserList.styled';
import { Card } from '../../organisms';

export const UserList = ({ data, action }) => {
  return (
    <UserListWrapper>
      {console.log(data)}
      {data &&
        data.items.map((user) => (
          <Card key={user.id} username={user.login} action={action} />
        ))}
    </UserListWrapper>
  );
};
