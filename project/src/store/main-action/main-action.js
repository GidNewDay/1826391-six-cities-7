// Действия
import {createReducer} from '@reduxjs/toolkit';
import {fillOffersList, changeCity, sortOffersList} from '../action';
import {SortType} from '../../const';

const initialState = {
  offers: [],
  activeCity: 'Paris',
  sortVal: SortType.POPULAR,
};

const mainAction = createReducer(initialState, (builder) => {
  builder
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(sortOffersList, (state, action) => {
      state.sortVal = action.payload;
    });
});

export {mainAction};
