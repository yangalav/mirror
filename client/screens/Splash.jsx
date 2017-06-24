import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/user';

class Splash extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    if (this.props.shouldRedirect) {
      return (
        <div>
          <div>made it</div>
          <button onClick={this.props.logoutUser}>log out</button>
        </div>

      );
    }
    return (
      <form>
        <Link to="/register">
          {'Register'}
        </Link>

        <Link to="/login">
          {'Login'}
        </Link>
      </form>
    );
  }
}
const mapStateToProps = ({ user }) => ({ ...user });
export default connect(mapStateToProps, { logoutUser })(Splash);
