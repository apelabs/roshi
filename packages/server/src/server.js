const { ApolloServer, AuthenticationError } = require('apollo-server');

const config = require('./config');
const logger = require('./logger');
const { jwt } = require('./auth');
const { typeDefs, resolvers } = require('./schema');
const User = require('./modules/user/model');
const { getUser } = require('./auth');
const RequireAuthDirective = require('./directives/Auth');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const { authorization } = req.headers;
    let user;

    try {
      user = await getUser(authorization);
    } catch (error) {
      logger.error(error);
    }

    return { req: Object.assign({}, req, { user }) };
  },
  schemaDirectives: {
    auth: RequireAuthDirective,
  },
  playground: {
    settings: {
      'editor.theme': 'light',
      'editor.cursorShape': 'line',
    },
  },
  // formatError: error => {}, // todo: add logger?
  // formatResponse: error => {}, // customise responses' format?
});

module.exports = server;
