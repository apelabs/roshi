import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String) {
    createUser(email: $email, password: $password) {
      user {
        email
      }
    }
  }
`;

const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      user {
        email
      }
    }
  }
`;

export { CREATE_USER, AUTHENTICATE_USER };
