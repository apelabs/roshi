import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';

import AuthenticateUserForm from '../components/Forms/AuthenticateUserForm';
import { onChangeHandler, formInputs } from '../components/Forms/formData';
import RoshiErrorModal from '../components/Modal/RoshiErrorModal';
import { getGraphqlErrorMessage } from '../utils';

const mutations = require('../apollo/resolvers').Mutation;
const mutationsUtils = require('../apollo/utils').mutations.authenticateUser;

const AuthenticateUser = () => (
  <Mutation mutation={mutations.AUTHENTICATE_USER} update={mutationsUtils.updatePropCallback}>
    {(authenticateUser, { error }) => {
      const authenticateHandler = mutationsUtils.mutateHandler(authenticateUser, formInputs);

      return (
        <Fragment>
          {error && <RoshiErrorModal message={getGraphqlErrorMessage(error)} />}
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
