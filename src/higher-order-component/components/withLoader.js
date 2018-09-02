import React, { Component } from 'react';
import { isNil, isEmpty } from 'lodash';

const isEmptyProp = (prop) => isNil(prop) || isEmpty(prop);

const withLoader = (loadingProp) => (WrappedComponent) =>
  class extends Component {
    render() {
      return isEmptyProp(this.props[loadingProp]) ? (
        <div className="loader">Loading...</div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };

export default withLoader;
