const { gql } = require('apollo-server');
const { User } = require('./user/models');

const user = require('./user');

const base = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

module.exports = {
  typeDefs: [
    base, // in order to use 'extend' on other typeDefs
    user.typeDefs,
  ],
  resolvers: Object.assign({}, user.resolvers),
};
