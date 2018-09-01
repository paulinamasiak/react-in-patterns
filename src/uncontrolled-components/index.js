import React from 'react';
import FileForm from './components/FileForm';

// "Uncontrolled component" is an input from element, where form data
// is handled by the DOM itself

const UntrolledComponents = () => (
  <div className="container">
    <h1 className="h2 mb-4">Uncontrolled component pattern example</h1>
    <div className="card">
      <div className="card-body">
        <FileForm />
      </div>
    </div>
  </div>
);

export default UntrolledComponents;
