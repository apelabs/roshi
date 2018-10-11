import React, { Fragment } from 'react';

const UpdateUserForm = ({
  updateUserHandler,
  emailInput,
  passwordInput,
  firstNameInput,
  lastNameInput,
  avatarInput,
  user,
}) => (
  <Fragment>
    <h1>Update</h1>
    <form onSubmit={updateUserHandler}>
      <input defaultValue={user.email} placeholder="Email" ref={emailInput} type="email" />
      <input
        defaultValue={user.password}
        placeholder="Password"
        ref={passwordInput}
        type="password"
      />
      <input
        defaultValue={user.firstName}
        placeholder="First name"
        ref={firstNameInput}
        type="text"
      />
      <input defaultValue={user.lastName} placeholder="Last name" ref={lastNameInput} type="text" />
      <input defaultValue={user.avatarUrl} placeholder="Avatar" ref={avatarInput} type="text" />
      <button type="submit">Update</button>
    </form>
  </Fragment>
);

export default UpdateUserForm;
