const { User } = require('../models');

function user(parent, args, context, info) {
  return User.findById(args.id);
}

function users(parent, args, context, info) {
  return User.find({});
}

module.exports = {
  user,
  users,
};
