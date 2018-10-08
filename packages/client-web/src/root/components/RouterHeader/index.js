import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const linkBuilder = () => {
  const links = {
    home: {
      text: 'Home',
      path: '/',
    },
    login: {
      text: 'Login',
      path: '/login',
    },
    register: {
      text: 'Register',
      path: '/register',
    },
  };

  return Object.keys(links).map(link => <Link to={links[link].path}>{links[link].text}</Link>);
};

const RouterHeader = () => <nav>{linkBuilder()}</nav>;

export default withRouter(RouterHeader);
