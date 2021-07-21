// страница «Room» с подробным описанием предложения по аренде
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import offerProp from './offer.prop';
import Header from '../main/header';
import {useParams} from 'react-router-dom';
import OfferReviewForm from './offer-review-form';
import ReviewList from '../review/reviews-list';
import OffersList from './offers-list';
import Map from '../map/map';

function Room(props) {
  const {offers, reviews} = props;
  const {id} = useParams();
  const offer = offers.find((o) => o.id === parseInt(id, 10));//«Оффер» с текущим ID
  const offerPercentRating = Math.floor(offer.rating) * 100 / 5;
  const CITY = offer.city;
  const nearOffers = [];
  offers.map((o) => {
    if (o.city[0].name === offer.city[0].name && o.id !== parseInt(id, 10)) {
      nearOffers.push(o);
    }
    return true;
  });

  const [activeCard, setActiveCard] = useState({});
  const onCardHover = (cardTitle) => {
    const currentCard = nearOffers.find((point) =>
      point.title === cardTitle,
    );
    setActiveCard(currentCard);
  };
  return (
    <div className="page">

      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="Studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className={`property__bookmark-button button ${offer.isFavorite && 'property__bookmark-button--active'}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark">&nbsp;</use>
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offerPercentRating}%`}}>&nbsp;</span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${offer.host[0].isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={offer.host[0].avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offer.host[0].name}
                  </span>
                  {offer.host[0].isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList reviews={reviews}/>
                <OfferReviewForm/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={CITY} points={nearOffers} activeCard={activeCard}/>
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <OffersList onCardHover={onCardHover} listType={'near-places__list'} offers={nearOffers}/>

          </section>
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(offerProp).isRequired,
};

export default Room;
