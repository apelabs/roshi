import gql from 'graphql-tag';

const GET_CLIENT_USER = gql`
  {
    user @client {
      email
    }
    kwonUser @client
  }
`;

export { GET_CLIENT_USER };