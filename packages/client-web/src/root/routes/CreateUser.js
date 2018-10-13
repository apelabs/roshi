import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';

import CreateUserForm from '../components/Forms/CreateUserForm';
import { onChangeHandler, formInputs } from '../components/Forms/formData';
import RoshiErrorModal from '../components/Modal/RoshiErrorModal';
import { getErrorMessage } from '../utils';

const mutations = require('../apollo/resolvers').Mutation;

const CreateUser = () => (
  <Mutation
    mutation={mutations.CREATE_USER}
    update={(cache, result) => {
      cache.writeData({
        data: {
          user: result.data.createUser.user,
        },
      });
    }}
  >
    {(createUser, { error }) => {
      const createUserHandler = event => {
        event.preventDefault();
        createUser({
          variables: {
            email: formInputs['email'],
            password: formInputs['password'],
            firstName: formInputs['firstName'],
            lastName: formInputs['lastName'],
            avatarUrl: formInputs['avatarUrl'],
          },
        });

        // Clearing input fields
        event.target.reset();
      };

      return (
        <Fragment>
          {error && <RoshiErrorModal message={getErrorMessage(error)} />}
          <CreateUserForm onChangeHandler={onChangeHandler} onSubmitHandler={createUserHandler} />
        </Fragment>
      );
    }}
  </Mutation>
);

export default CreateUser;
