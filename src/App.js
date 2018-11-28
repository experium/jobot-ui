import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import { ThemeProvider, theme } from './ui';
import logo from './logo.svg';
import './App.css';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyles />
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
        </ThemeProvider>
    );
  }
}

export default App;
