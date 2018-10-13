import React from 'react';
import { Query, Mutation } from 'react-apollo';

import UpdateUserForm from '../components/Forms/UpdateUserForm';
import { onChangeHandler, formInputs } from '../components/Forms/formData';

const mutations = require('../apollo/resolvers').Mutation;
const queries = require('../apollo/resolvers').Query;

const UpdateUser = () => (
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
                    email: formInputs['email'],
                    password: formInputs['password'],
                    firstName: formInputs['firstName'],
                    lastName: formInputs['lastName'],
                    avatarUrl: formInputs['avatarUrl'],
                  },
                },
              });
              // Clearing input fields
              event.target.reset();
            };

            return (
              <UpdateUserForm
                onChangeHandler={onChangeHandler}
                onSubmitHandler={updateUserHandler}
                user={user}
              />
            );
          }}
        </Mutation>
      );
    }}
  </Query>
);

export default UpdateUser;
