import React, { Component } from 'react';
import { Button } from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
    <div>
      <Button
        onClick={() => this.props.history.push('/signup')}>
        Create Account
      </Button>
      <Button
        onClick={() => this.props.history.push('/signin')}>
        Sign In
      </Button>
    </div>
  );
};
}

export default HomePage;