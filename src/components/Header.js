import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ onLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Budget App</h1>
        </Link>
        <button className="button button--no-bg-sd" onClick={onLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(startLogout())
});

Header.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default connect(undefined, mapDispatchToProps)(Header);
