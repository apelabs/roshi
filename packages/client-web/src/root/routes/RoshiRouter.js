import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AuthenticateUser from './AuthenticateUser';
import CreateUser from './CreateUser';
import Profile from './Profile';
import UpdateUser from './UpdateUser';

const RoshiRouter = ({ user }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={AuthenticateUser} />
    <Route exact path="/register" component={CreateUser} />
    <Route exact path="/profile" render={props => <Profile {...props} user={user} />} />
    <Route exact path="/profile/edit" component={UpdateUser} />
  </Switch>
);

export default RoshiRouter;
