import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Signin from './auth/Signin';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

      </div>
    );
  }
}

export default App;
