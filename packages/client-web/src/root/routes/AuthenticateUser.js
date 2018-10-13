import React from 'react';
import { Mutation } from 'react-apollo';

import AuthenticateUserForm from '../components/Forms/AuthenticateUserForm';
import { onChangeHandler, formInputs } from '../components/Forms/formData';

const mutations = require('../apollo/resolvers').Mutation;

const AuthenticateUser = () => (
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
            email: formInputs['auth-email'],
            password: formInputs['auth-password'],
          },
        });

        // Clearing input fields
        event.target.reset();
      };

      return (
        <AuthenticateUserForm
          onChangeHandler={onChangeHandler}
          onSubmitHandler={authenticateHandler}
        />
      );
    }}
  </Mutation>
);

export default AuthenticateUser;
