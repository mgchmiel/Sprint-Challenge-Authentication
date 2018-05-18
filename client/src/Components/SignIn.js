import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  };

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state)
      .then(response => {
        localStorage.setItem('authToken', response.data.token);
        alert('Login was successful.  Enjoy the jokes!');
        this.props.history.push('/jokes');
      })
      .catch(err => {
        alert('There was an issue while loggin you in.  Please try again.');
      });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <h1> Sign In</h1>

        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            value={this.state.username}
            onChange={this.inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.inputHandler}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SignIn;