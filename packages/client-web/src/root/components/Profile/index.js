import React from 'react';
import { Query } from 'react-apollo';

const queries = require('../../apollo/resolvers').Query;

const liBuilder = user => Object.keys(user).map(prop => <li>{`${prop}: ${user[prop]}`}</li>);

const Profile = () => (
  <Query query={queries.GET_CLIENT_USER_DETAILS}>
    {({ data: { user } }) => <ol>{liBuilder(user)}</ol>}
  </Query>
);

export default Profile;
