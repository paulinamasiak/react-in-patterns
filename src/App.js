import React, { Component } from 'react';
import ControlledComponent from './controlled-component';
import RenderProps from './render-props';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header text-center">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React in Patterns</h1>
        </header>
        <main>
          <section className="app-section">
            <ControlledComponent />
          </section>
          <section className="app-section">
            <RenderProps />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
