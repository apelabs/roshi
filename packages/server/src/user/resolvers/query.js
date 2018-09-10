const { UserInputError } = require('apollo-server');
const User = require('../model');

function user(root, args = {}, context, info) {
  if (!args.id) {
    throw new UserInputError('ID missing');
  }
  return User.findById(args.id);
}

function users(root, args, context, info) {
  return User.find({});
}

module.exports = {
  user,
  users,
};
