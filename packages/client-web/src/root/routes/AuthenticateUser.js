import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';

import AuthenticateUserForm from '../components/Forms/AuthenticateUserForm';
import { onChangeHandler, formInputs } from '../components/Forms/formData';
import RoshiErrorModal from '../components/Modal/RoshiErrorModal';
import { getErrorMessage } from '../utils';

const mutations = require('../apollo/resolvers').Mutation;

const AuthenticateUser = () => (
  <Mutation
    mutation={mutations.AUTHENTICATE_USER}
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
    {(authenticateUser, { error }) => {
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
        <Fragment>
          {error && <RoshiErrorModal message={getErrorMessage(error)} />}
          <AuthenticateUserForm
            onChangeHandler={onChangeHandler}
            onSubmitHandler={authenticateHandler}
          />
        </Fragment>
      );
    }}
  </Mutation>
);

export default AuthenticateUser;
