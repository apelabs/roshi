const { User } = require('../models');

module.exports = {
  Query: {
    users: () => User.find({}),
    user: ({ id }) => User.findById(id),
  },

  Mutation: {
    async signup(root, { email, firstName, lastName, avatarUrl, password }) {
      const user = new User({
        firstName,
        lastName,
        email,
        avatarUrl,
        password,
      });

      try {
        await user.save();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
