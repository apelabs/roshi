const User = require('../models/user');

async function getUser({ id }) {
  return await User.findById(id);
}

async function getAllUsers() {
  const users = await User.find({});
  return users;
}

async function createUser({ ...user }) {
  return await new User(user).save();
}

async function updateUser(id) {
  // return User.updateOne({ id: id }, ...)
  // return User.findOneAndUpdate({ id: id }, ...)
}

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
