import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Navbar } from './components/organisms';
import { UserList, UserDetails } from './components/templates';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar title='Explorer' />
        <Switch>
          <Route exact path='/' component={UserList} />
          <Route exact path='#' component={UserDetails} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
