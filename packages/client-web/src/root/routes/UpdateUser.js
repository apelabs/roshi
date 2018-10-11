import React, { createRef } from 'react';
import { Query, Mutation } from 'react-apollo';

import UpdateUserForm from '../components/Forms/UpdateUserForm';

const mutations = require('../apollo/resolvers').Mutation;
const queries = require('../apollo/resolvers').Query;

const UpdateUser = () => {
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
    <Query query={queries.GET_FETCHED_CLIENT_USER_DETAILS}>
      {({ data: { user } }) => {
        return (
          <Mutation
            mutation={mutations.UPDATE_USER}
            onError={err => {
              console.log(err);
            }}
            update={(cache, result) => {
              cache.writeData({
                data: {
                  user: result.data.updateUser.user,
                },
              });
            }}
            // Updating user values
            refetchQueries={[
              {
                query: queries.GET_CLIENT_USER_DETAILS,
                variables: { id: user.id },
              },
            ]}
          >
            {updateUser => {
              const updateUserHandler = event => {
                event.preventDefault();
                updateUser({
                  variables: {
                    id: user.id,
                    update: {
                      email: emailInput.current.value,
                      password: passwordInput.current.value,
                      firstName: firstNameInput.current.value,
                      lastName: lastNameInput.current.value,
                      avatarUrl: avatarInput.current.value,
                    },
                  },
                });
                // Clearing input fields
                event.target.reset();
              };

              return (
                <UpdateUserForm updateUserHandler={updateUserHandler} user={user} {...inputsRef} />
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default UpdateUser;
