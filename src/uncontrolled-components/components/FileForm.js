import React, { Component } from 'react';

class FileForm extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(`Selected file - ${this.inputRef.current.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            id="exampleInputFile1"
            className="form-control-file"
            type="file"
            ref={this.inputRef}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default FileForm;
