import React, { Component } from 'react';
import logo from './logo.svg';
import './Root.css';

import { Image } from '@apelabs/roshi-ui';
import { Button } from '@apelabs/roshi-ui';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Image />
          <Button children="logo.svg" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
