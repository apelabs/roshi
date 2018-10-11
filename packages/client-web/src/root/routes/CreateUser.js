import React, { createRef } from 'react';
import { Mutation } from 'react-apollo';

import CreateUserForm from '../components/Forms/CreateUserForm';

const mutations = require('../apollo/resolvers').Mutation;

const CreateUser = () => {
  const emailInput = createRef();
  const passwordInput = createRef();
  const firstNameInput = createRef();
  const lastNameInput = createRef();
  const avatarInput = createRef();

  const inputsRef = {
    emailInput,
    passwordInput,
    firstNameInput,
    lastNameInput,
    avatarInput,
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
              email: emailInput.current.value,
              password: passwordInput.current.value,
              firstName: firstNameInput.current.value,
              lastName: lastNameInput.current.value,
              avatarUrl: avatarInput.current.value,
            },
          });

          // Clearing input fields
          event.target.reset();
        };

        return <CreateUserForm createUserHandler={createUserHandler} {...inputsRef} />;
      }}
    </Mutation>
  );
};

export default CreateUser;
