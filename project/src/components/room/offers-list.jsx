// компонент «Список предложений»
import React from "react";
import PropTypes from 'prop-types';
import offerProp from './offer.prop'
import OfferCard from "./offer-сard";

function OffersList({offers}){
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        <OfferCard
          offer={offer}
        />
      })}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  )
};

export default OffersList;
