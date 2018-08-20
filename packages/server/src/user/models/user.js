const mongoose = require('mongoose');

// const { Schema } = mongoose;

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
      // challenges: {
      //   type: [mongoose.Schema.Types.ObjectId],
      //   ref: 'Challenge'
      // }
    },
    { timestamps: true }
  )
);
