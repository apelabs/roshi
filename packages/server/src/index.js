require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;
const { typeDefs, resolvers } = require('./schema');

mongoose.set('debug', process.env.NODE_ENV !== 'production');

async function startServer() {
  await mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  );

  const app = express();

  // Additional middleware can be mounted at this point to run before Apollo.
  // app.use('*', jwtCheck, requireAuth, checkScope);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: async (req) => {},
    playground: {
      settings: {
        'editor.theme': 'light',
        'editor.cursorShape': 'line',
      },
    },
  });

  server.applyMiddleware({ app, path: '/graphql' });

  await app.listen({ port: PORT });

  console.log(`🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer().catch(error => console.error(error.stack));
