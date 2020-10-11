import React, { useEffect } from 'react';
import { CardDetails } from '../../organisms';
import { UserDetailsWrapper } from './UserDetails.styled';

export const UserDetails = ({ data, handleError }) => {
  const throwError = handleError();

  useEffect(() => {
    if (!data) {
      throwError(new Error('Tenemos un error'));
    }
  }, [data]);

  return (
    <UserDetailsWrapper>
      {data && <CardDetails data={data} />}
    </UserDetailsWrapper>
  );
};
