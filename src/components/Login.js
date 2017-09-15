import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.user.email || '',
      name: props.user.name || '',
      isLogged: props.user.isLogged || false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      email: nextProps.user.email || '',
      name: nextProps.user.name || '',
      isLogged: nextProps.user.isLogged || false
    });
  }

  handleEmailChange(evt) {
    this.props.onUpdateStudent({ email: evt.target.value });
  }

  handleNameChange(evt) {
    this.props.onUpdateStudent({ name: evt.target.value });
  }

  handleUserSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmitStudent();
  }

  isValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  isValidName(name) {
    if (name) {
      return name.trim().length > 0;
    }
    return false;
  }

  render() {
    let buttonClassName = "pure-u-1 pure-button pure-button-primary";

    if ( !(this.isValidEmail(this.props.user.email) && this.isValidName(this.props.user.name) )) {
      buttonClassName += ' pure-button-disabled';
    }

    return (
      <form className="pure-form pure-form-stacked">
      
        <label>Email
          <input
            type="email"
            placeholder="Enter your email"
            onChange={evt => this.handleEmailChange(evt)}
            value={this.state.email} />
        </label>
        <span className="pure-form-message">This is a required field.</span>
        
        <label>Name
          <input
            type="text"
            placeholder="Enter your name"
            onChange={evt => this.handleNameChange(evt)}
            value={this.state.name} />
        </label>
        <span className="pure-form-message">This is a required field.</span>
  
        <button
          type="submit"
          className={buttonClassName}
          onClick={evt => this.handleUserSubmit(evt)}>
          {this.state.isLogged ? 'Continue' : 'Login'}
        </button>
  
      </form>
    );
  }
}

Login.propTypes = {
  onUpdateStudent: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string
  })
}

export default Login;