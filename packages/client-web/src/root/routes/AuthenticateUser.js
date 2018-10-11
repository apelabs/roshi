import React, { createRef } from 'react';
import { Mutation } from 'react-apollo';

import AuthenticateUserForm from '../components/Forms/AuthenticateUserForm';

const mutations = require('../apollo/resolvers').Mutation;

const AuthenticateUser = () => {
  const emailInput = createRef();
  const passwordInput = createRef();

  const inputsRef = {
    emailInput,
    passwordInput,
  };

  return (
    <Mutation
      mutation={mutations.AUTHENTICATE_USER}
      onError={err => {
        console.log(err, 'error');
      }}
      update={(cache, result) => {
        const { user } = result.data.authenticateUser;
        const { token } = result.data.authenticateUser;
        cache.writeData({
          data: {
            user,
          },
        });
        localStorage.setItem('jwt-roshi-token', token);
      }}
    >
      {(authenticateUser, { data }) => {
        const authenticateHandler = event => {
          event.preventDefault();
          authenticateUser({
            variables: {
              email: emailInput.current.value,
              password: passwordInput.current.value,
            },
          });

          // Clearing input fields
          event.target.reset();
        };

        return <AuthenticateUserForm authenticateHandler={authenticateHandler} {...inputsRef} />;
      }}
    </Mutation>
  );
};

export default AuthenticateUser;
