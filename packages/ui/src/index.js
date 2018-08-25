import React from 'react';
import ReactDOM from 'react-dom';

import Image from '../src/components/Image';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Playground</h1>
        <Image withsadow withradius="50%" style={{ transform: 'rotate(45deg)' }} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
