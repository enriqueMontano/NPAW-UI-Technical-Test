import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { UserTemplate } from './components/templates';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={UserTemplate} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
