// компонент «Отзыв»
import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import {MONTH_NAMES} from '../../const';

function Review(props) {
  const {review} = props;
  const d=new Date(review.date);
  const REVIEW_DATE = `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.floor(review.rating) * 100 / 5}%`}}>&nbsp;</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{REVIEW_DATE}</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: PropTypes.arrayOf(offerProp).isRequired,
};

export default Review;
