import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, fetchUserDetails } from './actions';
import { Navbar } from './components/organisms';
import { BarChart } from './components/atoms';
import { UserList, UserDetails } from './components/templates';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './App.css';

function App() {
  const [input, setInput] = useState('enrique');
  const [user, setUser] = useState(null);

  const usersList = useSelector((state) => state.usersList);
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  const handleInput = (value) => {
    dispatch(fetchUsers(input));
    setInput(value);
  };

  const handleUser = (name) => {
    setUser(name);
    console.log(input);
    dispatch(fetchUserDetails(user));
  };

  useEffect(() => {
    dispatch(fetchUsers(input)); // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar action={handleInput} />
        <BarChart
          indexBy='login'
          keys={['followers']}
          data={[
            { login: 'DayanRO', followers: 100 },
            { login: 'enriqueMontano', followers: 50 },
            { login: 'Yaiyai', followers: 100 },
            { login: 'Jorge', followers: 80 },
            { login: 'Madalin', followers: 100 },
            { login: 'FranOrange', followers: 50 },
            { login: 'Maria', followers: 100 },
            { login: 'yoqueSe', followers: 80 },
            { login: 'Bichote', followers: 100 },
            { login: 'ola', followers: 50 },
          ]}
        />
        <Switch>
          <Route
            exact
            path='/'
            component={() => <UserList data={usersList} action={handleUser} />}
          />
          <Route
            exact
            path='/detail/:name'
            component={() => <UserDetails data={userDetails} />}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
