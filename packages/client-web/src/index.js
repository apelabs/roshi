import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';
// import configureStore from './configureStore';
// import Root from './root/containers/Root';
import Root from './root/components/Root';
import client from './root/apollo/client';

// const store = configureStore();

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <Provider store={store}> */}
    <Root />
    {/* </Provider> */}
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
