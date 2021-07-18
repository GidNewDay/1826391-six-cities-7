// компонент «Список отзывов»
import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import Review from './review';
import offerProp from '../offer/offer.prop';

function ReviewList(props) {
  const {reviews} = props;
  const {id} = useParams();
  const reviewsArr = [];
  reviews.map((review) => {
    if (review.roomId === parseInt(id,10)) {
      reviewsArr.push(review);
    }
    return true;
  });
  return (
    <>
      <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviewsArr.length}</span></h2>
      {reviewsArr && (
        <ul className='reviews__list'>
          {reviewsArr.map((review) => (
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
