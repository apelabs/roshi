import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import resolvers from './resolvers';
import { setContext } from 'apollo-link-context';

const httpLink = new HttpLink({
  uri: 'http://localhost:4010/api/graphql',
});

const cache = new InMemoryCache();

const defaults = {
  user: undefined,
};

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

const stateLink = withClientState({
  cache: cache.restore(window.__APOLLO_CLIENT__),
  resolvers,
  defaults,
});

const link = ApolloLink.from([stateLink, authLink, httpLink]);

const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
});

export default client;
