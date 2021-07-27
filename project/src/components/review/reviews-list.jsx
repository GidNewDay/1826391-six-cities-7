// компонент «Список отзывов»
import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import offerProp from '../offer/offer.prop';

function ReviewList(props) {
  const {reviews} = props;

  return (
    <>
      <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviews.length}</span></h2>
      {reviews && (
        <ul className='reviews__list'>
          {reviews.filter((review, index) => index < 10).map((review) => (
            <Review review={review} key={review.id}/>
          ))}
        </ul>
      )}
    </>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(offerProp).isRequired,
};

export default ReviewList;
