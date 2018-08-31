import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(`${this.state.email} form submited!`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            id="exampleInputEmail1"
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            id="exampleInputPassword1"
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Log in
        </button>
      </form>
    );
  }
}

export default LoginForm;
