import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './redux/action';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { UserList, UserDetails } from './components/templates';
import './App.css';
import { Navbar } from './components/organisms';

function App() {
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
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar title='Explorer' action={handleInput} />
        <Switch>
          <Route
            exact
            path='/'
            component={() => (
              <UserList error={error} pending={pending} users={users} />
            )}
          />
          <Route exact path='#' component={UserDetails} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
