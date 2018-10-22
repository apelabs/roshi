import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';

import CreateUserForm from '../components/Forms/CreateUserForm';
import { onChangeHandler, formInputs } from '../components/Forms/formData';
import { RoshiErrorModal } from '@roshi/ui';
import { RoshiSuccessModal } from '@roshi/ui';
import { RoshiLoader } from '@roshi/ui';
import { getGraphqlErrorMessage } from '../utils';

const mutations = require('../apollo/resolvers').Mutation;
const {
  updatePropCallback,
  populateMutationValues,
} = require('../apollo/utils').mutations.updateCreateShared;

const CreateUser = () => (
  <Mutation mutation={mutations.CREATE_USER} update={updatePropCallback('createUser')}>
    {(createUser, { loading, error, data }) => {
      const createUserHandler = event => {
        event.preventDefault();
        createUser({
          variables: populateMutationValues(formInputs),
        });

        // Clearing input fields
        event.target.reset();
      };

      return (
        <Fragment>
          {loading && <RoshiLoader />}
          {error && <RoshiErrorModal message={getGraphqlErrorMessage(error)} />}
          {data && (
            <RoshiSuccessModal message={`${data.createUser.user.email} user created successfuly`} />
          )}
          <CreateUserForm onChangeHandler={onChangeHandler} onSubmitHandler={createUserHandler} />
        </Fragment>
      );
    }}
  </Mutation>
);

export default CreateUser;
