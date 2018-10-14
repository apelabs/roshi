import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';

import AuthenticateUserForm from '../components/Forms/AuthenticateUserForm';
import { onChangeHandler, formInputs } from '../components/Forms/formData';
import RoshiErrorModal from '../components/Modal/RoshiErrorModal';
import RoshiSuccessModal from '../components/Modal/RoshiSuccessModal';
import { getGraphqlErrorMessage } from '../utils';

const mutations = require('../apollo/resolvers').Mutation;
const { updatePropCallback, mutateHandler } = require('../apollo/utils').mutations.authenticateUser;

const AuthenticateUser = () => (
  <Mutation mutation={mutations.AUTHENTICATE_USER} update={updatePropCallback}>
    {(authenticateUser, { data, error }) => {
      const authenticateHandler = mutateHandler(authenticateUser, formInputs);

      return (
        <Fragment>
          {error && <RoshiErrorModal message={getGraphqlErrorMessage(error)} />}
          {data && (
            <RoshiSuccessModal message={`Welcome back ${data.authenticateUser.user.email}`} />
          )}
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
