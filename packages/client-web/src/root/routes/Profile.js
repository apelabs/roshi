import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
const queries = require('../apollo/resolvers').Query;

const liBuilder = user =>
  Object.keys(user).map((prop, key) => <li key={key}>{`${prop}: ${user[prop]}`}</li>);

const Profile = ({ user: { id } }) => (
  <Query query={queries.GET_CLIENT_USER_DETAILS} variables={{ id }}>
    {({ loading, data: { user } }) => {
      if (loading) {
        return null;
      } else {
        return (
          <React.Fragment>
            <ol>{liBuilder(user)}</ol>
            <Link to={'/profile/edit'}>Edit Profile</Link>
          </React.Fragment>
        );
      }
    }}
  </Query>
);

export default Profile;
