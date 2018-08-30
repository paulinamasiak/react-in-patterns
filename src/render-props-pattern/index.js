import React from 'react';
import List from './List';
import data from './data.json';

const itemRederer = (item) => (
  <div className="list__item" key={item.id}>
    {item.name}
  </div>
);

const RenderPropsPattern = () => (
  <div>
    <h1>Render props pattern example</h1>
    <List items={data} itemRenderer={itemRederer} />
  </div>
);

export default RenderPropsPattern;
