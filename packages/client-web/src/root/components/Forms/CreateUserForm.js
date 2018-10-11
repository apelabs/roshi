import React, { Fragment } from 'react';

const CreateUserForm = ({
  createUserHandler,
  emailInput,
  passwordInput,
  firstNameInput,
  lastNameInput,
  avatarInput,
}) => (
  <Fragment>
    <h1>Register</h1>
    <form onSubmit={createUserHandler}>
      <input placeholder="Email" required ref={emailInput} type="email" />
      <input placeholder="Password" required ref={passwordInput} type="password" />
      <input placeholder="First name" ref={firstNameInput} type="text" />
      <input placeholder="Last name" ref={lastNameInput} type="text" />
      <input placeholder="Avatar" ref={avatarInput} type="text" />

      <button type="submit">Register</button>
    </form>
  </Fragment>
);

export default CreateUserForm;
