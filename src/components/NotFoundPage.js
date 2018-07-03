import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <div className="header__title">
            <h1>Budget App</h1>
          </div>
        </div>
      </div>
    </header>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          The requested page does not exist.<br />
          <Link className="button" to="/">Back to Dashboard</Link>
        </h1>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
