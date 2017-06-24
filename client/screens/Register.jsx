import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { registerUser } from '../actions/user';

class Register extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    this.props.registerUser(values).then(() => {
      this.props.history.push('/');
    }).catch(err => console.error(err));
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <RegisterForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});


export default connect(mapStateToProps, { registerUser })(Register);
