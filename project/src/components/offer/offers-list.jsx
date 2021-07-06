// компонент «Список предложений»
import React, {useState} from "react";
import PropTypes from 'prop-types';
import offerProp from './offer.prop'
import OfferCard from "./offer-card";

function OffersList({offers}){
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          onMouseEnter={({target}) => setActiveCardId(target.offsetParent.id)}
        />
      ))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  ),
  onMouseEnter: PropTypes.func.isRequired,
};

export default OffersList;
