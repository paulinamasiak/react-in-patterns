import React from 'react';
import LoginForm from './components/LoginForm';

// "Controlled component" is an input from element whose value is controlled
// by React on subsequent user input

const ControlledComponent = () => (
  <section className="container px-2">
    <h1>Controlled component pattern example</h1>
    <div className="card">
      <div className="card-body">
        <LoginForm />
      </div>
    </div>
  </section>
);

export default ControlledComponent;
