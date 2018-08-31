import React from 'react';
import List from './components/List';
import contacts from './data/contacts.json';

// Render prop is a function prop that a component uses to know what to render.
// In this case a render prop is itemRenderer prop.

const itemRederer = ({ id, name }) => (
  <div className="list-group-item" key={id}>
    {name}
  </div>
);

const RenderPropsPattern = () => (
  <section className="container">
    <h1>Render props pattern example</h1>
    <List items={contacts} itemRenderer={itemRederer} />
  </section>
);

export default RenderPropsPattern;
