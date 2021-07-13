// компонент «Отзыв»
import React from "react";
import PropTypes from "prop-types";
import offerProp from "../offer/offer.prop";

function Review(props) {
  const {review} = props;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.reviewerImg} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.reviewerName}
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
          {review.description}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
      </div>
    </li>
  )
}

Review.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  )
};

export default Review;
