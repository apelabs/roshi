import React, { Fragment, createRef } from 'react';
import { Mutation } from 'react-apollo';

const mutations = require('../../apollo/resolvers').Mutation;

const CreateUser = () => {
  const emailInput = createRef();
  const passwordInput = createRef();

  return (
    <Mutation
      mutation={mutations.CREATE_USER}
      onError={err => console.log(err, 'error')}
      update={(cache, result) => {
        cache.writeData({
          data: {
            kwonUser: false,
            user: result.data.createUser.user,
          },
        });
      }}
    >
      {(createUser, { data }) => (
        <Fragment>
          <h1>Register</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              createUser({
                variables: {
                  email: emailInput.current.value,
                  password: passwordInput.current.value,
                },
              });
            }}
          >
            <input ref={emailInput} type="email" />
            <input ref={passwordInput} type="password" />
            <button type="submit">Register</button>
          </form>
        </Fragment>
      )}
    </Mutation>
  );
};

export default CreateUser;
