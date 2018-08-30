import React from 'react';
import List from './List';
import data from './data.json';

// Render prop is a function prop that a component uses to know what to render.
// In this case a render prop is itemRenderer prop.

const itemRederer = ({ id, name }) => (
  <div className="list__item" key={id}>
    {name}
  </div>
);

const RenderPropsPattern = () => (
  <section>
    <h1>Render props pattern example</h1>
    <List items={data} itemRenderer={itemRederer} />
  </section>
);

export default RenderPropsPattern;