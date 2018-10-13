import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';

import CreateUserForm from '../components/Forms/CreateUserForm';
import { onChangeHandler, formInputs } from '../components/Forms/formData';
import RoshiErrorModal from '../components/Modal/RoshiErrorModal';
import { getGraphqlErrorMessage } from '../utils';

const mutations = require('../apollo/resolvers').Mutation;
const mutationsUtils = require('../apollo/utils').mutations.updateCreateShared;

const CreateUser = () => (
  <Mutation
    mutation={mutations.CREATE_USER}
    update={mutationsUtils.updatePropCallback('createUser')}
  >
    {(createUser, { error }) => {
      const createUserHandler = event => {
        event.preventDefault();
        createUser({
          variables: mutationsUtils.populateMutationValues(formInputs),
        });

        // Clearing input fields
        event.target.reset();
      };

      return (
        <Fragment>
          {error && <RoshiErrorModal message={getGraphqlErrorMessage(error)} />}
          <CreateUserForm onChangeHandler={onChangeHandler} onSubmitHandler={createUserHandler} />
        </Fragment>
      );
    }}
  </Mutation>
);

export default CreateUser;
