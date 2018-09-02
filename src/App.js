import React from 'react';
import ControlledComponent from './controlled-component';
import UncontrolledComponent from './uncontrolled-component';
import RenderProps from './render-props';
import HigherOrderComponent from './higher-order-component';
import logo from './logo.svg';

const App = () => (
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
        <UncontrolledComponent />
      </section>
      <section className="app-section">
        <RenderProps />
      </section>
      <section className="app-section">
        <HigherOrderComponent />
      </section>
    </main>
  </div>
);

export default App;
