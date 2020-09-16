import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../../redux/action';
import { UserListWrapper } from './UserList.styled';
import { Navbar } from '../../organisms';

export const UserList = () => {
  const [input, setInput] = useState('enrique');

  const users = useSelector((state) => state.users);
  const error = useSelector((state) => state.error);
  const pending = useSelector((state) => state.pending);

  const dispatch = useDispatch();

  const handleInput = (value) => setInput(value);

  useEffect(() => {
    dispatch(fetchUsers(input));
  }, [dispatch, input]);

  return (
    <UserListWrapper>
      {console.log(error, pending, users, input)}
      <Navbar title='Explorer' action={handleInput} />
    </UserListWrapper>
  );
};
