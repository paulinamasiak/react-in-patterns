import React, { Component } from 'react';
import Table from './components/Table';
import withLoader from './components/withLoader';
import colors from './data/colors.json';

// Higher-order component is a function that takes a component
// and returns an extended version of that component

const COLUMN_NAMES = ['color', 'color name', 'hex color code'];
const LOADING_TIMEOUT = 4000;

// component with wrapped functionality
const TableWithLoader = withLoader('items')(Table);

// render prop for Table component
const rowRenderer = ({ id, name, hex }) => {
  const style = {
    backgroundColor: hex,
  };

  return (
    <tr key={id}>
      <td>
        <div className="js-color" style={style} />
      </td>
      <td>{name}</td>
      <td>{hex}</td>
    </tr>
  );
};

class HigherOrderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        colors,
      });
    }, LOADING_TIMEOUT);
  }

  render() {
    const { colors } = this.state;

    return (
      <div className="container">
        <h1 className="h2 mb-4">Higher order component</h1>
        <div className="card">
          <div className="card-body">
            <TableWithLoader
              columnNames={COLUMN_NAMES}
              items={colors}
              rowRenderer={rowRenderer}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HigherOrderComponent;
