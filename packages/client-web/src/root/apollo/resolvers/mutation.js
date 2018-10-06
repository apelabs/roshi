import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation CreateUser(
    $email: String!
    $password: String
    $firstName: String
    $lastName: String
    $avatarUrl: String
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      avatarUrl: $avatarUrl
    ) {
      user {
        email
        id
      }
    }
  }
`;

const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      user {
        email
        id
      }
    }
  }
`;

export { CREATE_USER, AUTHENTICATE_USER };
