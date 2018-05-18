import React from 'react';
import { Button } from 'reactstrap';

const HomePage = props => {
  return (
    <div>
      <Button
        onClick={() => props.history.push('/signup')}>
        Create Account
      </Button>
      <Button
        onClick={() => props.history.push('/signin')}>
        Sign In
      </Button>
    </div>
  );
};

export default { HomePage };