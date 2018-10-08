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
        firstName
        lastName
        avatarUrl
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
        firstName
        lastName
        avatarUrl
      }
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $update: UserUpdate!) {
    updateUser(id: $id, update: $update) {
      email
    }
  }
`;

export { CREATE_USER, AUTHENTICATE_USER, UPDATE_USER };
