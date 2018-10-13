import React, { createRef } from 'react';
import { Mutation } from 'react-apollo';

import CreateUserForm from '../components/Forms/CreateUserForm';

const mutations = require('../apollo/resolvers').Mutation;

const CreateUser = () => {
  const formInputs = {
    'new-email': '',
    'new-password': '',
    'new-firstName': '',
    'new-lastName': '',
    'new-avatarUrl': '',
  };

  const onChangeHandler = event => {
    const { name, value } = event.target;

    formInputs[name] = value;
  };

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
      {createUser => {
        const createUserHandler = event => {
          event.preventDefault();
          createUser({
            variables: {
              email: formInputs['new-email'],
              password: formInputs['new-password'],
              firstName: formInputs['new-firstName'],
              lastName: formInputs['new-lastName'],
              avatarUrl: formInputs['new-avatarUrl'],
            },
          });

          // Clearing input fields
          event.target.reset();
        };

        return (
          <CreateUserForm onChangeHandler={onChangeHandler} onSubmitHandler={createUserHandler} />
        );
      }}
    </Mutation>
  );
};

export default CreateUser;
