import React, { Component } from 'react';
import RenderPropsPattern from './render-props-pattern';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app__title">Welcome to React in Patterns</h1>
        </header>
        <main className="app__main">
          <RenderPropsPattern />
        </main>
      </div>
    );
  }
}

export default App;
