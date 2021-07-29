// компонент «Карточка избранного предложения»
import React, {useState} from 'react';
import offerProp from '../offer/offer.prop';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setFavorite} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selector';

function FavoriteCard({offer}) {
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
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offers/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place pic"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={toggleFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"> </use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${percentRating}%`}}> </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`/offer/${offer.id}`}>{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

FavoriteCard.propTypes = {
  offer: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoriteCard;
