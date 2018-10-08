import gql from 'graphql-tag';

const GET_CLIENT_USER = gql`
  {
    user @client {
      email
      id
    }
  }
`;

const GET_CLIENT_USER_DETAILS = gql`
  {
    user @client {
      id
      email
      firstName
      lastName
      avatarUrl
    }
  }
`;

export { GET_CLIENT_USER, GET_CLIENT_USER_DETAILS };
