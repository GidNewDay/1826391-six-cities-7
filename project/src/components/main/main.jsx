// компонент «Главная страница»
import React, {useState} from 'react';
import OffersList from '../offer/offers-list';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import Header from './header';
import Map from '../map/map';
import {connect} from 'react-redux';
import {changeCity} from '../../store/action';
import CitiesList from '../cities-list/cities-list';
import {CITIES, SortType} from '../../const';
import OffersSort from '../offer/offers-sort';
import {getOffers} from '../../store/data/selector';
import {getActiveCity, getSortVal} from '../../store/main-action/selector';

function Main(props) {
  const {offers, activeCity, onChangeCity, sortVal} = props;
  const activeCityOffers = offers.filter((offer) => offer.city.name === activeCity);
  const cityData = activeCityOffers[0].city;

  const [activeCard, setActiveCard] = useState({});
  const onCardHover = (cardTitle) => {
    const currentCard = activeCityOffers.find((point) =>
      point.title === cardTitle,
    );
    setActiveCard(currentCard);
  };

  function changeCityName(evt, cityValue) {
    evt.preventDefault();
    onChangeCity(cityValue);
  }

  switch (sortVal){
    case SortType.PRICE_LOW:
      activeCityOffers.sort((a, b) => a.price - b.price);
      break;
    case SortType.PRICE_HIGH:
      activeCityOffers.sort((a, b) => b.price - a.price);
      break;
    case SortType.TOP_RATED:
      activeCityOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      activeCityOffers.sort((a, b) => a.id - b.id);
  }

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
              changeCity={changeCityName}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeCityOffers.length} places to stay in {activeCity}</b>
              <OffersSort
                sortVal={sortVal}
              />
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
  activeCity: PropTypes.string.isRequired,
  sortVal: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  activeCity: getActiveCity(state),
  sortVal: getSortVal(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(value) {
    dispatch(changeCity(value));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
