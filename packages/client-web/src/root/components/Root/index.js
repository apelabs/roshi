import React, { Component } from 'react';
import Authentication from '../Authentication';
import Profile from '../Profile';
import RouterHeader from '../RouterHeader';
import RoshiRouter from '../../routes/Router';
import { Query } from 'react-apollo';

import logo from './logo.svg';
import './Root.css';

const queries = require('../../apollo/resolvers').Query;

const greetingMessage = kwonUser => (kwonUser ? 'Welcome back' : 'New user registered');

class App extends Component {
  render() {
    return (
      <Query query={queries.GET_CLIENT_USER}>
        {({ data: { user, kwonUser } }) => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Roshi</h1>
              <RouterHeader />
            </header>
            <p className="App-intro">
              <RoshiRouter />
              {/* <Authentication />
              {user && `${greetingMessage(kwonUser)} ${user.email}`}
              {user && user.id && <Profile />} */}
            </p>
          </div>
        )}
      </Query>
    );
  }
}

export default App;
