import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <header><Header /></header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
