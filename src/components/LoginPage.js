import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin } from '../actions/auth';

export const LoginPage = ({ onGoogleLogin, onFacebookLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Budget App</h1>
      <p>Manage your wealth and better your life</p>
      <hr />
      <div className="box-layout__buttons">
        <button className="button button__login-box button--go" onClick={onGoogleLogin}>
          Login with Google
        </button>
        <button className="button button__login-box button--fb" onClick={onFacebookLogin}>
          Login with Facebook
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onGoogleLogin: () => dispatch(startGoogleLogin()),
  onFacebookLogin: () => dispatch(startFacebookLogin())
});

LoginPage.propTypes = {
  onGoogleLogin: PropTypes.func.isRequired,
  onFacebookLogin: PropTypes.func.isRequired
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
