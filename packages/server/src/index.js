require('dotenv').config();

const { ApolloServer, AuthenticationError } = require('apollo-server');
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

const { typeDefs, resolvers } = require('./schema');

mongoose.set('debug', process.env.NODE_ENV !== 'production');

async function startServer() {
  await mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  );

  const serverInfo = await new ApolloServer({
    typeDefs,
    resolvers,
    // context: async ({ headers = {} }) => {
    //   const { authorization = '' } = headers;
    //   const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
    //   console.dir(decoded, { depth: null });
    //   // const user = User.findByToken(authorization);
    //   return {};

    //   if (!user) {
    //     throw new AuthorizationError('you must be logged in');
    //   }
    //   return { user };
    // },
    playground: {
      settings: {
        'editor.theme': 'light',
        'editor.cursorShape': 'line',
      },
    },
    // formatError: error => {}, // todo: add logger?
    // formatResponse: error => {}, // customise responses' format?
  }).listen();
  console.log(`🚀  Server ready at ${serverInfo.url}`);
}

startServer().catch(error => console.error(error.stack));
