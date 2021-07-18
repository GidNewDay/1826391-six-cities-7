// компонент «Избранное» («Favourites»)
import React from 'react';
import offerProp from '../offer/offer.prop';
import PropTypes from 'prop-types';
import FavouriteCard from './favourite-card';
import Header from '../main/header';

function Favourites({offers}) {
  const cities = [];
  offers.map((offer) => {
    if (offer.isFavorite) {
      let city = cities.find((c) => c.name === offer.city[0].name);
      if (!city) {
        city = {
          name: offer.city[0].name,
          offers: [offer],
        };
        cities.push(city);
      } else {
        city.offers.push(offer);
      }
    }
    return true;
  });
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li className="favorites__locations-items" key={city.name}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="/">
                        <span>{city.name}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {city.offers.map((offer) => (
                      <FavouriteCard offer={offer} key={offer.id}/>
                    ))}
                  </div>
                </li>),
              )};
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

Favourites.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default Favourites;
