import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
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
      <div className="App">
        <GlobalStyles />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
