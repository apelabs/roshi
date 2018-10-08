import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthenticateUser from '../components/Authentication/AuthenticateUser';
import CreateUser from '../components/Authentication/CreateUser';
import Home from './Home';

const RoshiRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={CreateUser} />
    <Route exact path="/login" component={AuthenticateUser} />
  </Switch>
);

export default RoshiRouter;
