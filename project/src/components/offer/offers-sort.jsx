// компонент «Варианты сортировки»
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sortOffersList} from '../../store/action';
import {SortType} from '../../const';
import {getSortVal} from '../../store/main-action/selector';

function OffersSort() {
  const sortVal = useSelector(getSortVal);
  const dispatch = useDispatch();
  const [isOpened, setOpenedSortList] = useState(false);
  const toggleDropList = () => {
    setOpenedSortList(!isOpened);
  };

  function sortBy(evt) {
    dispatch(sortOffersList(evt.target.innerText));
    toggleDropList();
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleDropList}>
        &nbsp;{sortVal}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"> </use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}>
        {Object.values(SortType).map((type) => (
          <li key={type} className={`places__option ${sortVal === type && 'places__option--active'}`} tabIndex="0" onClick={sortBy}>{type}</li>
        ))}
      </ul>
    </form>
  );
}

export default OffersSort;
