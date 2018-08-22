const { User } = require('../models');

function user(root, args, context, info) {
  const { id } = root.user;
  return User.findById(id);
}

module.exports = { user };
