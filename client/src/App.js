import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import Jokes from './Components/Jokes';
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
