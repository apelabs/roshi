const { User } = require('../models');
const { createUser, getUser, getAllUsers } = require('../controllers');

module.exports = {
  Query: {
    user: (root, args) => getUser(args),
    users: (root, args) => getAllUsers(args),
  },

  Mutation: {
    createUser: (root, args) => createUser(args),
  },
};
