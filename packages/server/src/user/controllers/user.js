const User = require('../models/user');

async function getUser({ id }) {
  return await User.findById(id);
}

async function getAllUsers() {
  return await User.find({});
}

async function createUser({ ...user }) {
  return await new User(user).save();
}

async function updateUser({ ...user }) {}

async function deleteUser() {
  return await User.deleteOne({ id: args.id });
}

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
