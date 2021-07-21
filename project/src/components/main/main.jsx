// компонент «Главная страница»
import React, {useState} from 'react';
import OffersList from '../offer/offers-list';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import Header from './header';
import Map from '../map/map';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import CitiesList from '../cities-list/cities-list';
import {CITIES} from '../../const';

function Main(props) {
  const {offers, activeCity, onChangeCity} = props;

  function changeCity(evt, cityValue) {
    evt.preventDefault();
    onChangeCity(cityValue);
  }
  const activeCityOffers = offers.filter((offer) => offer.city[0].name === activeCity);
  const cityData = activeCityOffers[0].city;

  const [activeCard, setActiveCard] = useState({});
  const onCardHover = (cardTitle) => {
    const currentCard = activeCityOffers.find((point) =>
      point.title === cardTitle,
    );
    setActiveCard(currentCard);
  };


  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={CITIES}
              activeCity={activeCity}
              changeCity={changeCity}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeCityOffers.length} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"> </use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OffersList
                offers={activeCityOffers}
                listType={'cities__places-list tabs__content'}
                onCardHover={onCardHover}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={cityData}
                  points={activeCityOffers}
                  activeCard={activeCard}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  onChangeCity: PropTypes.func.isRequired,
  activeCity: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(id) {
    dispatch(ActionCreator.changeCity(id));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
