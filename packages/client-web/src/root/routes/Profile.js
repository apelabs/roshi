import React, { Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

import RoshiErrorModal from '../components/Modal/RoshiErrorModal';
import { RoshiLoader } from '@roshi/ui';
import { getGraphqlErrorMessage } from '../utils';

const queries = require('../apollo/resolvers').Query;
const mutations = require('../apollo/resolvers').Mutation;

const liBuilder = user =>
  Object.keys(user).map((prop, key) => <li key={key}>{`${prop}: ${user[prop]}`}</li>);

const Profile = ({ user: { id }, history }) => {
  const navigateToHomePage = () => history.push('/');

  return (
    <Query query={queries.GET_CLIENT_USER_DETAILS} variables={{ id }}>
      {({ data: { user }, error, loading }) => {
        return (
          <Fragment>
            {loading && <RoshiLoader />}
            {error && <RoshiErrorModal message={getGraphqlErrorMessage(error)} />}

            <ol>{liBuilder(user)}</ol>
            <Link to={'/profile/edit'}>Edit Profile</Link>
            <Mutation
              mutation={mutations.DELETE_USER}
              variables={{ id }}
              onError={err => {
                console.log(err);
              }}
              onCompleted={navigateToHomePage}
            >
              {deleteUser => <button onClick={deleteUser}>Delete User</button>}
            </Mutation>
          </Fragment>
        );
      }}
    </Query>
  );
};

export default Profile;
