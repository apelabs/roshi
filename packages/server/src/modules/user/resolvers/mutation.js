const { AuthenticationError } = require('apollo-server');

const User = require('../model');
const { encodeToken } = require('../../../auth');

async function authenticateUser(root, { email, password }) {
  const user = await User.findOne({ email }).exec();

  if (!user) {
    throw new AuthenticationError('No user found');
  }

  const valid = await user.comparePassword(password);
  if (!valid) {
    throw new AuthenticationError('Invalid password');
  }

  return encodeToken(user);
}

async function createUser(root, args) {
  const user = await User.create(args);

  return encodeToken(user);
}

function deleteUser(root, { id }) {
  // todo: check that the user is authorized to delete other users than himself
  return User.findByIdAndDelete(id).exec();
}

async function updateUser(root, { id, update = {} }) {
  // todo: check that the user is authorized to update other users than himself
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
