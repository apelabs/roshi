const { User } = require('../../models');

module.exports = {
  Query: {
    users: () => User.find({}),
    user: ({ id }) => User.findById(id),
  },

  Mutation: {
    signup(email, firstName, lastName, avatarUrl, password) {
      const user = new User({
        firstName,
        lastName,
        email,
        avatarUrl,
        password,
      });

      user.save();
    },
  },
};
