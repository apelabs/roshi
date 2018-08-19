const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    avatarUrl: String
    # challenges: [Challenge]
  }

  extend type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  extend type Mutation {
    signup(email: String!, firstName: String): User!
  }
`;
