// компонент «Список отзывов»
import React from 'react';
import Review from './review';
import {useSelector} from 'react-redux';
import {getComments} from '../../store/data/selector';

function ReviewList() {
  let reviews = useSelector(getComments);
  reviews = reviews.slice().sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });
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

export default ReviewList;
