import React, { Fragment } from 'react';

const AuthenticateUserForm = ({ authenticateHandler, emailInput, passwordInput }) => (
  <Fragment>
    <h1>Login</h1>
    <form onSubmit={authenticateHandler}>
      <input ref={emailInput} type="email" />
      <input ref={passwordInput} type="password" />

      <button type="submit">Login</button>
    </form>
  </Fragment>
);

export default AuthenticateUserForm;
