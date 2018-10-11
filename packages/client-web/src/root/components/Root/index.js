import React, { Component } from 'react';
import RouterHeader from '../RouterHeader';
import RoshiRouter from '../../routes/Router';
import { Query } from 'react-apollo';

import logo from './logo.svg';
import './Root.css';

const queries = require('../../apollo/resolvers').Query;

class App extends Component {
  render() {
    return (
      <Query query={queries.GET_CLIENT_USER}>
        {({ data: { user } }) => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Roshi</h1>
              <RouterHeader loggedUser={user && user.id} />
            </header>
            <div className="App-intro">
              <RoshiRouter user={user} />
            </div>
          </div>
        )}
      </Query>
    );
  }
}

export default App;
