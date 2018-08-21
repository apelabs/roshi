const User = require('../models/user');

async function getUser({ id }) {
  console.log('id ->', id);
  return await User.findById(id);
}

async function getAllUsers() {
  return await User.find({});
}

async function createUser({ ...user }) {
  return await new User(user).save();
}

async function updateUser({ id, update }) {
  return await User.findByIdAndUpdate(id, update).exec();
}

async function deleteUser({ id }) {
  return await User.findByIdAndDelete(id).exec();
}

module.exports = {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
};
