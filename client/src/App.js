import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage.js';
import SignUp from './Components/SignUp.js';
import SignIn from './Components/SignIn.js';
import Jokes from './Components/Jokes.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;