module.exports = {
  mutations: {
    authenticateUser: {
      updatePropCallback: (cache, result) => {
        const { user } = result.data.authenticateUser;
        const { token } = result.data.authenticateUser;
        cache.writeData({
          data: {
            user,
          },
        });
        localStorage.setItem('jwt-roshi-token', token);
      },
      mutateHandler: (authenticateUser, formInputs) => event => {
        event.preventDefault();
        authenticateUser({
          variables: {
            email: formInputs['auth-email'],
            password: formInputs['auth-password'],
          },
        });

        // Clearing input fields
        event.target.reset();
      },
    },
    updateCreateShared: {
      updatePropCallback: dataPropType => (cache, result) => {
        cache.writeData({
          data: {
            user: result.data[dataPropType].user,
          },
        });
      },
      populateMutationValues: formInputs => ({
        email: formInputs['email'],
        password: formInputs['password'],
        firstName: formInputs['firstName'],
        lastName: formInputs['lastName'],
        avatarUrl: formInputs['avatarUrl'],
      }),
    },
  },
};
