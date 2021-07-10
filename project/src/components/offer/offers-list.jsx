// компонент «Список предложений»
import React from "react";
import PropTypes from 'prop-types';
import offerProp from './offer.prop'
import OfferCard from "./offer-card";

function OffersList({offers, onCardHover}) {
  const cardHoverHandler = (evt) => {
    onCardHover(evt.title);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          onMouseEnter={() => cardHoverHandler(offer)}
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
};

export default OffersList;
