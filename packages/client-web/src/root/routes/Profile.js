import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
const queries = require('../apollo/resolvers').Query;

const liBuilder = user =>
  Object.keys(user).map((prop, key) => <li key={key}>{`${prop}: ${user[prop]}`}</li>);

const Profile = () => (
  <Query query={queries.GET_CLIENT_USER_DETAILS}>
    {({ data: { user } }) => {
      return (
        <React.Fragment>
          <ol>{liBuilder(user)}</ol>
          <Link to={'/profile/edit'}>Edit Profile</Link>
        </React.Fragment>
      );
    }}
  </Query>
);

export default Profile;
