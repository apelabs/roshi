require('dotenv').config();

const { ApolloServer, gql } = require('apollo-server');
const crypto = require('crypto');
const mongoose = require('mongoose');

// let db = {
//   users: [
//     { id: 1, email: 'me@xavierfuentes.com', firstName: 'Xavi', avatarUrl: 'http://gravatar.com' },
//     { id: 2, email: 'byverdu@gmail.com', firstName: 'Albert', avatarUrl: 'http://gravatar.com' },
//   ],
// };
mongoose.set('debug', process.env.NODE_ENV !== 'production');

mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    const typeDefs = gql`
      type Query {
        users: [User!]!
        user(id: ID!): User
      }

      type Mutation {
        addUser(email: String!, firstName: String): User
      }

      type User {
        id: ID!
        email: String!
        firstName: String
        avatarUrl: String
      }
    `;

    const resolvers = {
      Query: {
        users: () => db.users,
        user: args => db.users.find(user => user.id === args.id),
      },
      Mutation: {
        addUser(email, firstName) {
          const user = {
            id: crypto.randomBytes(10).toString(),
            name,
            firstName,
          };

          db.users.push(user);

          return user;
        },
      },
    };

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: {
        'editor.theme': 'light',
      },
    });

    return server.listen();
  })
  .then(serverInfo => {
    console.log(`🚀  Server ready at ${serverInfo.url}`);
  })
  .catch(error => console.error(error));
