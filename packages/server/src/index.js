require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const crypto = require('crypto');
const mongoose = require('mongoose');

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
    // context: async (req) => {},
    playground: {
      settings: {
        'editor.theme': 'light',
        'editor.cursorShape': 'line',
      },
    },
  }).listen();
  console.log(`🚀  Server ready at ${serverInfo.url}`);
}

startServer().catch(error => console.error(error.stack));
