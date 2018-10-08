import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthenticateUser from '../components/Authentication/AuthenticateUser';
import CreateUser from '../components/Authentication/CreateUser';
import Home from './Home';
import Profile from '../components/Profile';

const RoshiRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={AuthenticateUser} />
    <Route exact path="/register" component={CreateUser} />
    <Route exact path="/profile" component={Profile} />
  </Switch>
);

export default RoshiRouter;
