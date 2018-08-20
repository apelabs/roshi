const mongoose = require('mongoose');

module.exports = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
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
      avatarUrl: String,
    },
    { timestamps: true }
  )
);
