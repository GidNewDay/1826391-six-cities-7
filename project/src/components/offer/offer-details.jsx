import React, {useState} from 'react';
import offerProp from './offer.prop';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setFavorite} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selector';

function OfferDetails({offer}) {
  const percentRating = Math.floor(offer.rating) * 100 / 5;

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);
  const history = useHistory();

  function toggleFavorite(evt) {
    evt.preventDefault();

    const favoriteVal = isFavorite ? 0 : 1;
    dispatch(setFavorite(offer.id, favoriteVal));

    if (authorizationStatus === 'AUTH') {
      setIsFavorite(!isFavorite);
    } else {
      history.push('/login');
    }
  }

  return (
    <>
      {offer.isPremium && (
        <div className="property__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {offer.title}
        </h1>
        <button
          className={`property__bookmark-button button ${isFavorite && 'property__bookmark-button--active'}`}
          type="button"
          onClick={toggleFavorite}
        >
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark">&nbsp;</use>
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${percentRating}%`}}>&nbsp;</span>
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
          <div className={`property__avatar-wrapper ${offer.host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
            <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
          </div>
          <span className="property__user-name">
            {offer.host.name}
          </span>
          {offer.host.isPro && (
            <span className="property__user-status">Pro</span>
          )}
        </div>
        <div className="property__description">
          <p className="property__text">
            {offer.description}
          </p>
        </div>
      </div>
    </>
  );
}

OfferDetails.propTypes = {
  offer: PropTypes.arrayOf(offerProp).isRequired,
};

export default OfferDetails;
