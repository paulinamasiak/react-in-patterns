import React from 'react';
import LoginForm from './components/LoginForm';

// "Controlled component" is an input from element whose value is controlled
// by React on subsequent user input

const ControlledComponents = () => (
  <div className="container">
    <h1 className="h2 mb-4">Controlled component pattern example</h1>
    <div className="card">
      <div className="card-body">
        <LoginForm />
      </div>
    </div>
  </div>
);

export default ControlledComponents;
