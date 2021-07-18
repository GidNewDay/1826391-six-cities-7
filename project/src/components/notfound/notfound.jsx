import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../main/header';

function NotFound() {
  return (
    <div className="page page--favorites-empty">
      <Header/>

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <div className="cities__status-wrapper">
              <b className="favorites__status">404 Not Found</b>
              <p className="favorites__status-description">
                We are sorry. The URL you requested was not found.<br/>
                <Link to="/">Go to the Main &#8250;</Link>
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default NotFound;
