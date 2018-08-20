const { gql } = require('apollo-server');

module.exports = gql`
  extend type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  extend type Mutation {
    createUser(email: String!, firstName: String, password: String): User!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    avatarUrl: String
  }
`;
