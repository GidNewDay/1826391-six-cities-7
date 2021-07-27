// Данные
import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, loadNearbyOffers, loadComments} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  nearby: [],
  comments: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export {data};
