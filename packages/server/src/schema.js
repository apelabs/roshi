const { gql } = require('apollo-server');
const merge = require('lodash/merge');

const { User } = require('./user/models');

const user = require('./user');

const rootTypes = gql`
  """
  Root queries to be extended from
  """
  type Query {
    """
    Health Check
    """
    hello: String
  }
  type Mutation {
    _empty: String
  }
`;

const rootResolvers = {
  Query: {
    hello: () => `it's alive!`,
  },
};

module.exports = {
  typeDefs: [
    rootTypes, // in order to use 'extend' on other typeDefs
    user.typeDefs,
  ],
  resolvers: merge({}, rootResolvers, user.resolvers),
};
