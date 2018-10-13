import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import RoshiRouter from '../../routes/RoshiRouter';
import RoshiErrorModal from '../Modal/RoshiErrorModal';
import { getErrorMessage } from '../../utils';
import Header from '../Header';

import './Root.css';

const queries = require('../../apollo/resolvers').Query;

const App = () => (
  <Query query={queries.GET_CLIENT_USER}>
    {({ data: { user }, error }) => (
      <Fragment>
        {error && <RoshiErrorModal message={getErrorMessage(error)} />}
        <div className="App">
          <Header user={user && user} />
          <div className="App-intro">
            <RoshiRouter user={user} />
          </div>
        </div>
      </Fragment>
    )}
  </Query>
);

export default App;
