import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import resolvers from './resolvers';

const httpLink = new HttpLink({
  uri: 'http://localhost:4010/api/graphql',
});

const cache = new InMemoryCache();

const defaults = {
  kwonUser: false,
  user: undefined,
};

const stateLink = withClientState({
  cache: cache.restore(window.__APOLLO_CLIENT__),
  resolvers,
  defaults,
});

const link = ApolloLink.from([stateLink, httpLink]);

const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
});

export default client;
