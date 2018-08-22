const User = require('../models/user');

async function createUser(user) {
  return await new User(user).save();
}

async function deleteUser(id) {
  return await User.findByIdAndDelete(id).exec();
}

async function getAllUsers() {
  return await User.find({});
}

async function getUser(id) {
  return await User.findById(id);
}

async function updateUser({ id, update }) {
  return await User.findByIdAndUpdate(id, update).exec();
}

module.exports = {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
};
