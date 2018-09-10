import React, { Component } from 'react';
import logo from './logo.svg';
import './Root.css';

import { Image, Button, InputWithLabel } from '@roshi/ui';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Image />
          <Button onClick={() => console.log('akakka')} children="logo.svg" />
          <InputWithLabel
            inputprops={{ border: '4px solid red' }}
            labelprops={{ border: '4px solid green' }}
            labeltext="Hello World"
            placeholder="Hi there"
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
