import React from 'react';
import FileForm from './components/FileForm';

// "Uncontrolled component" is an input from element, where form data
// is handled by the DOM itself

const UntrolledComponent = () => (
  <div className="container">
    <h1 className="h2 mb-4">Uncontrolled component</h1>
    <div className="card">
      <div className="card-body">
        <FileForm />
      </div>
    </div>
  </div>
);

export default UntrolledComponent;
