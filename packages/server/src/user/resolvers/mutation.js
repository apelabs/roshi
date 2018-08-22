const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { User } = require('../models');

async function authenticateUser(parent, args, context, info) {
  const user = await User.findOne({ email: args.email });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, 'APP_SECRET');

  return {
    token,
    user,
  };
}

function createUser(parent, args, context, info) {
  return new User(args).save();
}

function deleteUser(parent, args, context, info) {
  return User.findByIdAndDelete(args.id).exec();
}

async function updateUser(parent, args, context, info) {
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
