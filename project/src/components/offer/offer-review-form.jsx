// компонент «Форма отправки комментария»
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchCommentList, postComment} from '../../store/api-actions';
import {useParams} from 'react-router-dom';

function OfferReviewForm({ submitComment }) {
  const {id} = useParams();
  const stars = [5,4,3,2,1];
  const grade = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
  const [rate, setRating] = useState(0);
  const [review, setReview] = useState('');

  function update(event) {
    setReview(event.target.value);
  }

  const commentData= {
    rating: rate,
    comment: review,
  };
  const clearForm = () => {
    setRating(0);
    setReview('');
  };
  const isValidForm = ({rating, comment}) => rating && comment.length;
  const onSubmitComment = (evt) => {
    evt.preventDefault();
    submitComment(id, commentData);
    clearForm();
  };
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitComment}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rate"
              value={rate}
              id={`${star}-stars`}
              type="radio"
              onChange={() => {setRating(star);}}
              checked={rate === star}
            />
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title={grade[5-star]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star">&nbsp;</use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={update}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rate</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValidForm(commentData)}>Submit</button>
      </div>
    </form>
  );
}

OfferReviewForm.propTypes = {
  submitComment: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  submitComment(id, data) {
    dispatch(postComment(id, data));
    dispatch(fetchCommentList(id));
  },
});

export {OfferReviewForm};
export default connect(null, mapDispatchToProps)(OfferReviewForm);
