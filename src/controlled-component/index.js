import React from 'react';
import LoginForm from './components/LoginForm';

// "Controlled component" is an input from element whose value is controlled
// by React on subsequent user input

const ControlledComponent = () => (
  <section>
    <h1>Controlled component pattern example</h1>
    <LoginForm />
  </section>
);

export default ControlledComponent;
