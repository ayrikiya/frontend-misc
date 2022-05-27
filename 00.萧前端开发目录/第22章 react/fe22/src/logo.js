import React from 'react';

import logo from './logo.svg';


class Logo extends React.Component {
  render() {
    return (
      <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>欢迎</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and reload.
          </p>
      </div>
    )
  }
}

module.exports = Logo
