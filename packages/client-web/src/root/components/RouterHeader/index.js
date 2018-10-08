import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const linkBuilder = loggedUser => {
  let links = {
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

  const profile = {
    text: 'Profile',
    path: '/profile',
  };

  if (loggedUser) {
    links = { ...links, profile };
  }

  return Object.keys(links).map(link => {
    const { path, text } = links[link];

    return (
      <Link key={text} to={path}>
        {text}
      </Link>
    );
  });
};

const RouterHeader = ({ loggedUser }) => <nav>{linkBuilder(loggedUser)}</nav>;

export default withRouter(RouterHeader);
