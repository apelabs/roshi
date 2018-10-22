import React from 'react';

import RouterHeader from '../RouterHeader';

import logo from '../Root/logo.svg';

const Header = ({ user }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to Roshi</h1>
    <RouterHeader loggedUser={user && user.id} />
  </header>
);

export default Header;
