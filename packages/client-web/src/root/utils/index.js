export const getGraphqlErrorMessage = error =>
  error && error.message.replace('GraphQL error: ', '');

export const mutationUpdateAuthCallback = (cache, result) => {
  const { user } = result.data.authenticateUser;
  const { token } = result.data.authenticateUser;
  cache.writeData({
    data: {
      user,
    },
  });
  localStorage.setItem('jwt-roshi-token', token);
};
