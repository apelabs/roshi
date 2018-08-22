const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    password: String
    avatarUrl: String
  }

  input UserUpdate {
    firstName: String
    lastName: String
    email: String
    password: String
    avatarUrl: String
  }

  extend type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  extend type Mutation {
    createUser(email: String!, email: String, password: String): User!
    deleteUser(id: ID!): User
    updateUser(id: ID!, update: UserUpdate!): User!
  }
`;
