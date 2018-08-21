const { User } = require('../models');
const { createUser, getUser, getAllUsers } = require('../controllers');

module.exports = {
  Query: {
    user: (root, args) => getUser(args),
    users: getAllUsers,
  },

  Mutation: {
    createUser: (root, args) => createUser(args),
  },
};
