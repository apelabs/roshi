import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';
import Root from './root/components/Root';
import client from './root/apollo/client';

ReactDOM.render(
  <HashRouter>
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  </HashRouter>,
  document.getElementById('root')
);

registerServiceWorker();
