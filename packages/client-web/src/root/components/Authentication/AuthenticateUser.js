import React, { Fragment, createRef } from 'react';
import { Mutation } from 'react-apollo';

const mutations = require('../../apollo/resolvers').Mutation;

const AuthenticateUser = () => {
  const emailInput = createRef();
  const passwordInput = createRef();
  return (
    <Mutation
      mutation={mutations.AUTHENTICATE_USER}
      onError={err => console.log(err, 'error')}
      update={(cache, result) => {
        cache.writeData({
          data: {
            kwonUser: true,
            user: result.data.authenticateUser.user,
          },
        });
      }}
    >
      {(authenticateUser, { data }) => (
        <Fragment>
          <h1>Login</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              authenticateUser({
                variables: {
                  email: emailInput.current.value,
                  password: passwordInput.current.value,
                },
              });
            }}
          >
            <input ref={emailInput} type="email" />
            <input ref={passwordInput} type="password" />

            <button type="submit">Login</button>
          </form>
        </Fragment>
      )}
    </Mutation>
  );
};

export default AuthenticateUser;
