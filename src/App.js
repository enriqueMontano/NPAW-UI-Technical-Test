import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, fetchUserDetails } from './actions';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { UserList, UserDetails } from './components/templates';
import './App.css';
import { Navbar } from './components/organisms';

function App() {
  const [input, setInput] = useState('enrique');
  const [user, setUser] = useState(null);

  const data = useSelector((state) => state.data);
  const userData = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleInput = (value) => setInput(value);
  const handleSelectUser = (name) => {
    setUser(name);
    dispatch(fetchUserDetails(user));
  };

  useEffect(() => {
    dispatch(fetchUsers(input));
  }, [dispatch, input]);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar title='Explorer' action={handleInput} />
        <Switch>
          <Route
            exact
            path='/'
            component={() => <UserList data={data} action={handleSelectUser} />}
          />
          <Route
            exact
            path='/detail/:name'
            component={() => <UserDetails data={userData} />}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
