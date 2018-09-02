import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

const Table = ({ items, columnNames, rowRenderer }) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        {columnNames.map((columnName, index) => (
          <th key={index} scope="col">
            {columnName}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>{items.map(rowRenderer)}</tbody>
  </table>
);

Table.propTypes = {
  items: PropTypes.array,
  columnNames: PropTypes.arrayOf(PropTypes.string),
  rowRenderer: PropTypes.func,
};

Table.defaultProps = {
  items: [],
  columnNames: [],
  rowRenderer: noop,
};

export default Table;
