// компонент «Форма отправки комментария»
import React, {useState} from 'react';

function OfferReviewForm() {
  const stars = [5,4,3,2,1];
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  function update(event) {
    setComment(event.target.value);
    console.log(comment);
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review ({rating})</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={rating}
              id={`${star}-stars`}
              type="radio"
              onChange={() => {setRating(star)}}
            />
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
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
        value={comment}
        onChange={update}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

export default OfferReviewForm;
