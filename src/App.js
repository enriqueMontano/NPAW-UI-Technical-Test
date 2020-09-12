import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { UserTemplate } from './components/templates';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <UserTemplate />
      </div>
    </ThemeProvider>
  );
}

export default App;
