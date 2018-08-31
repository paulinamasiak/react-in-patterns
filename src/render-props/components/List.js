import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

const List = ({ items, itemRenderer }) => (
  <div className="list-group text-center">{items.map(itemRenderer)}</div>
);

List.propTypes = {
  items: PropTypes.array,
  itemRenderer: PropTypes.func,
};

List.defaultProps = {
  items: [],
  itemRenderer: noop,
};

export default List;
