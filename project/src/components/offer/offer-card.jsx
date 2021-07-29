// компонент «Карточка предложения»
import React, {useState} from 'react';
import offerProp from './offer.prop';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import {setFavorite} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selector';

function OfferCard(props) {
  const {offer, onMouseEnter} = props;
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
    <article
      className="cities__place-card place-card"
      id={offer.id}
      onMouseEnter={onMouseEnter}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.ROOM}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place appearance"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`}
            type="button"
            onClick={toggleFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark">&nbsp;</use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${percentRating}%`}}> </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.ROOM}/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.arrayOf(offerProp).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default OfferCard;
