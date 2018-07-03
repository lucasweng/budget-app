import React from 'react';


const LoadingPage = () => (
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
          Initializing...
        </h1>
      </div>
    </div>
    <div className="loader">
      <img className="loader__image" src="/images/loader.gif" alt="Loading Animation" />
    </div>
  </div>
);

export default LoadingPage;
