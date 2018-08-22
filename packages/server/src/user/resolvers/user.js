const { User } = require('../models');
const { createUser, deleteUser, getUser, getAllUsers, updateUser } = require('../controllers');

module.exports = {
  Query: {
    user: (root, { id }) => getUser(id),
    users: getAllUsers,
  },

  Mutation: {
    createUser: (root, args) => createUser(args),
    deleteUser: (root, { id }) => deleteUser(id),
    updateUser: (root, args) => updateUser(args),
  },
};
