import React from 'react';
import { Button } from 'reactstrap';

const HomePage = props => {
  const { buttonStyles, containerStyle } = styles;
  return (
    <div style={containerStyle}>
      <Button
        style={buttonStyles}
        onClick={() => props.history.push('/signup')}>
        Create Account
      </Button>
      <Button
        style={buttonStyles}
        onClick={() => props.history.push('/signin')}>
        Sign In
      </Button>
    </div>
  );
};

export { HomePage };