import React, { Fragment, createRef } from 'react';
import { Mutation } from 'react-apollo';
import { Query } from 'react-apollo';

const mutations = require('../apollo/resolvers').Mutation;
const queries = require('../apollo/resolvers').Query;

const UpdateUser = () => {
  const emailInput = createRef();
  const passwordInput = createRef();
  const firstNameInput = createRef();
  const lastNameInput = createRef();
  const avatarInput = createRef();

  return (
    <Query query={queries.GET_CLIENT_USER_DETAILS}>
      {({ data: { user } }) => {
        return (
          <Mutation
            mutation={mutations.UPDATE_USER}
            onError={err => console.log(err, 'error')}
            update={(cache, result) => {
              cache.writeData({
                data: {
                  user: result.data.updateUser.user,
                },
              });
            }}
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
                  <input placeholder="Email" required ref={emailInput} type="email" />
                  <input placeholder="Password" required ref={passwordInput} type="password" />
                  <input placeholder="First name" ref={firstNameInput} type="text" />
                  <input placeholder="Last name" ref={lastNameInput} type="text" />
                  <input placeholder="Avatar" ref={avatarInput} type="text" />
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
