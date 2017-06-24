import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../actions/user';


class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    this.props.loginUser(values).then(() => {
      this.props.history.push('/');
    }).catch(err => console.error(err));
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});


export default connect(mapStateToProps, { loginUser })(Login);
