import React, { Component, Fragment } from 'react';
import AuthenticateUser from './AuthenticateUser';
import CreateUser from './CreateUser';

class Authentication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: 'register',
    };
  }

  handleClick(formType) {
    this.setState({ formType });
  }

  render() {
    return (
      <Fragment>
        <button
          onClick={() => {
            this.handleClick('register');
          }}
        >
          Register
        </button>
        <button
          onClick={() => {
            this.handleClick('login');
          }}
        >
          Login
        </button>
        {this.state.formType === 'register' ? <CreateUser /> : <AuthenticateUser />}
      </Fragment>
    );
  }
}

export default Authentication;
