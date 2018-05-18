import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage, SignIn, SignUp, Jokes } from './Components/';
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
