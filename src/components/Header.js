import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ol>
      <li><NavLink to="/" activeClassName="is-active" exact>home</NavLink></li>
      <li><NavLink to="/create" activeClassName="is-active">create expense</NavLink></li>
      <li><NavLink to="/help" activeClassName="is-active">help</NavLink></li>
    </ol>
  </header>
);

export default Header;
