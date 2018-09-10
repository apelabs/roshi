const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../model');

async function authenticateUser(root, args, context, info) {
  const user = await User.findOne({ email: args.email });
  if (!user) {
    throw new AuthenticationError('No user found');
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new AuthenticationError('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return {
    token,
    user,
  };
}

function createUser(root, args, context, info) {
  return new User(args).save();
}

function deleteUser(root, args, context, info) {
  return User.findByIdAndDelete(args.id).exec();
}

async function updateUser(root, args, context, info) {
  const { id, update = {} } = args;
  // return User.findByIdAndUpdate(id, update, { new: true }).exec();
  const user = await User.findById(id);
  Object.keys(update).forEach(key => {
    user[key] = update[key];
  });
  return user.save();
}

module.exports = {
  authenticateUser,
  createUser,
  deleteUser,
  updateUser,
};
