import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './redux/action';
import './App.css';

function App() {
  const users = useSelector((state) => state.users);
  const error = useSelector((state) => state.error);
  const pending = useSelector((state) => state.pending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='App'>
      {console.log(pending, users, error)}
      hello world
    </div>
  );
}

export default App;
