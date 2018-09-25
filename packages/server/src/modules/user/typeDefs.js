const { gql } = require('apollo-server');

const { READ_ANY, READ_OWN } = require('./scopes');

module.exports = gql`
  type User {
    id: ID! @unique
    firstName: String
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

  type AuthPayload {
    token: String!
    user: User!
  }

  extend type Query {
    users: [User!]! @auth(scope: [${READ_ANY}])
    user(id: ID!): User! @auth(scope: [${READ_ANY}, ${READ_OWN}])
  }

  extend type Mutation {
    createUser(email: String!, password: String): AuthPayload!
    deleteUser(id: ID!): User
    updateUser(id: ID!, update: UserUpdate!): User!
    authenticateUser(email: String!, password: String!): AuthPayload!
  }
`;
