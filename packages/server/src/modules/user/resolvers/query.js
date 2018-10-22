const { UserInputError } = require('apollo-server');

const User = require('../model');

function user(root, { id, ...args } = {}) {
  if (!id) {
    throw new UserInputError('ID missing');
  }
  return User.findById(id);
}

function users() {
  return User.find({});
}

module.exports = {
  user,
  users,
};
