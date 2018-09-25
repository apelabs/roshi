const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SCOPES = require('./scopes');

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    scopes: {
      type: [String],
      default: [
        SCOPES.CREATE_ANY_USER,
        SCOPES.READ_OWN_USER,
        SCOPES.UPDATE_OWN_USER,
        SCOPES.UPDATE_OWN_USER,
      ],
    },
    avatarUrl: String,
  },
  { timestamps: true }
);

UserSchema.pre('save', async function preSave(next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);

  next();
});

UserSchema.methods.comparePassword = async function(plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
