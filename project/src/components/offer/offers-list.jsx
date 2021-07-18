// компонент «Список предложений»
import React from 'react';
import PropTypes from 'prop-types';
import offerProp from './offer.prop';
import OfferCard from './offer-card';

function OffersList({offers, listType, onCardHover}) {
  const cardHoverHandler = (evt) => {
    onCardHover(evt.title);
  };

  return (
    <div className={`${listType} places__list`}>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          onMouseEnter={() => cardHoverHandler(offer)}
          key={offer.id}
        />
      ))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  ),
  onCardHover: PropTypes.func.isRequired,
  listType: PropTypes.string.isRequired,
};

export default OffersList;
