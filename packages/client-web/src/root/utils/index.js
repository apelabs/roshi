export const getGraphqlErrorMessage = error =>
  error && error.message.replace('GraphQL error: ', '');
