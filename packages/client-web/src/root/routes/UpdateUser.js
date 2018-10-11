import React, { Fragment, createRef } from 'react';
import { Mutation } from 'react-apollo';
import { Query } from 'react-apollo';
import { ApolloError } from 'apollo-client';

const mutations = require('../apollo/resolvers').Mutation;
const queries = require('../apollo/resolvers').Query;

const UpdateUser = () => {
  const emailInput = createRef();
  const passwordInput = createRef();
  const firstNameInput = createRef();
  const lastNameInput = createRef();
  const avatarInput = createRef();

  return (
    <Query query={queries.GET_FETCHED_CLIENT_USER_DETAILS}>
      {({ data: { user } }) => {
        return (
          <Mutation
            mutation={mutations.UPDATE_USER}
            onError={err => {
              new ApolloError(err);
            }}
            update={(cache, result) => {
              cache.writeData({
                data: {
                  user: result.data.updateUser.user,
                },
              });
            }}
            refetchQueries={[
              {
                query: queries.GET_CLIENT_USER_DETAILS,
                variables: { id: user.id },
              },
            ]}
          >
            {(updateUser, { data }) => (
              <Fragment>
                <h1>Update</h1>
                <form
                  onSubmit={e => {
                    e.preventDefault();
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
                  }}
                >
                  <input value={user.email} placeholder="Email" ref={emailInput} type="email" />
                  <input
                    value={user.password}
                    placeholder="Password"
                    ref={passwordInput}
                    type="password"
                  />
                  <input
                    value={user.firstName}
                    placeholder="First name"
                    ref={firstNameInput}
                    type="text"
                  />
                  <input
                    value={user.lastName}
                    placeholder="Last name"
                    ref={lastNameInput}
                    type="text"
                  />
                  <input
                    value={user.avatarUrl}
                    placeholder="Avatar"
                    ref={avatarInput}
                    type="text"
                  />
                  <button type="submit">Update</button>
                </form>
              </Fragment>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default UpdateUser;
