import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  state = {
    authorized: false,
    jokes: [],
  };

  componentDidMount() {
    const token = localStorage.getItem('authToken');
    console.log(token, 'token');
    const auth = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .get('http://localhost:5000/api/jokes', auth)
      .then(response => {
        this.setState({ jokes: response.data, authorized: true });
      })
      .catch(err => console.log(err));
  }

  authorized = () => {
    if (this.state.authorized) {
      return (
        <div>
          {this.state.jokes.map(joke => {
            return (
              <div>
                <div>{joke.setup}</div>
                <div>{joke.punchline}</div>
              </div>
            );
          })}
        </div>
      );
    }
    return <div>UnAuthorized</div>;
  };

  render() {
    return this.authorized();
  }
};

export default { Jokes };