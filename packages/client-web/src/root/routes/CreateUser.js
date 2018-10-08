import React, { Fragment, createRef } from 'react';
import { Mutation } from 'react-apollo';

const mutations = require('../apollo/resolvers').Mutation;

const CreateUser = () => {
  const emailInput = createRef();
  const passwordInput = createRef();
  const firstNameInput = createRef();
  const lastNameInput = createRef();
  const avatarInput = createRef();

  return (
    <Mutation
      mutation={mutations.CREATE_USER}
      onError={err => console.log(err, 'error')}
      update={(cache, result) => {
        cache.writeData({
          data: {
            user: result.data.createUser.user,
          },
        });
      }}
    >
      {(createUser, { data }) => (
        <Fragment>
          <h1>Register</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              createUser({
                variables: {
                  email: emailInput.current.value,
                  password: passwordInput.current.value,
                  firstName: firstNameInput.current.value,
                  lastName: lastNameInput.current.value,
                  avatarUrl: avatarInput.current.value,
                },
              });
            }}
          >
            <input placeholder="Email" required ref={emailInput} type="email" />
            <input placeholder="Password" required ref={passwordInput} type="password" />
            <input placeholder="First name" ref={firstNameInput} type="text" />
            <input placeholder="Last name" ref={lastNameInput} type="text" />
            <input placeholder="Avatar" ref={avatarInput} type="text" />
            <button type="submit">Register</button>
          </form>
        </Fragment>
      )}
    </Mutation>
  );
};

export default CreateUser;
