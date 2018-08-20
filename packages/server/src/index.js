require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const crypto = require('crypto');
const mongoose = require('mongoose');

const { typeDefs, resolvers } = require('./schema');

mongoose.set('debug', process.env.NODE_ENV !== 'production');

mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(() =>
    new ApolloServer({
      typeDefs,
      resolvers,
      // context: {},
      playground: {
        settings: {
          'editor.theme': 'light',
          'editor.cursorShape': 'line',
        },
      },
    }).listen()
  )
  .then(serverInfo => {
    console.log(`🚀  Server ready at ${serverInfo.url}`);
  })
  .catch(error => console.error(error));
