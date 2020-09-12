import React, { useEffect } from 'react';
import { UserTemplateWrapper } from './User.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../../redux/action';
import { UserList } from '../../organisms/index';

export const UserTemplate = () => {
  const users = useSelector((state) => state.users);
  const error = useSelector((state) => state.error);
  const pending = useSelector((state) => state.pending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <UserTemplateWrapper>
      {console.log(pending, users, error)}
      USER TEMPLATE
      <UserList />
    </UserTemplateWrapper>
  );
};
