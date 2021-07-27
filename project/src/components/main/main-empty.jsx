import React from 'react';
import {useSelector} from 'react-redux';
import {getActiveCity} from '../../store/main-action/selector';

function MainEmpty() {
  const activeCity = useSelector(getActiveCity);
  return (
    <div className="cities__places-container container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {activeCity}</p>
        </div>
      </section>
      <div className="cities__right-section">&nbsp;</div>
    </div>
  );
}

export default MainEmpty;
