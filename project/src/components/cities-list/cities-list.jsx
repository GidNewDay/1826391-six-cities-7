// компонент «Список городов»
import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';

function CitiesList({cities, activeCity, changeCity}){
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li className="locations__item" key={city}>
            <a className={`locations__item-link tabs__item ${city === activeCity && 'tabs__item--active'}`} href="/" onClick={(evt) =>  { changeCity(evt, city); }}>
              <span>{city}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(offerProp).isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default CitiesList;
