const { gql } = require('apollo-server');

const { USER_READ_ANY, USER_READ_OWN } = require('./scopes');

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
    users: [User!]! @auth(scope: [${USER_READ_ANY}])
    user(id: ID!): User! @auth(scope: [${USER_READ_ANY}, ${USER_READ_OWN}])
  }

  extend type Mutation {
    createUser(email: String!, password: String, firstName: String, lastName: String, avatarUrl: String): AuthPayload!
    deleteUser(id: ID!): User
    updateUser(id: ID!, update: UserUpdate!): User!
    authenticateUser(email: String!, password: String!): AuthPayload!
  }
`;
