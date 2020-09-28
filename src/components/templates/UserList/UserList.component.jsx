import React from 'react';
import { UserListWrapper } from './UserList.styled';
import { BarChart } from '../../atoms';
import { CardList } from '../../organisms';

export const UserList = ({ data, action, chartData }) => {
  return (
    <UserListWrapper>
      <BarChart indexBy='login' keys={['followers']} data={chartData} />
      <div className='card-container'>
        {data &&
          data.items.map((user) => (
            <CardList
              key={user.id}
              username={user.login}
              id={user.id}
              avatar={user.avatar_url}
              action={action}
            />
          ))}
      </div>
    </UserListWrapper>
  );
};
