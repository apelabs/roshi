const { User } = require('../models');
const { createUser, deleteUser, getUser, getAllUsers, updateUser } = require('../controllers');

module.exports = {
  Query: {
    user: (obj, args) => getUser(args),
    users: getAllUsers,
  },

  Mutation: {
    createUser: (obj, args) => createUser(args),
    deleteUser: (obj, args) => deleteUser(args),
    updateUser: (obj, args) => updateUser(args),
  },
};
