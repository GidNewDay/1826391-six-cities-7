import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  FILL_OFFERS_LIST: 'main/fillOffersList',
  SORT_OFFERS_LIST: 'main/sortOffersList',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_COMMENTS: 'data/loadComments',
  LOAD_NEARBY_OFFERS: 'data/loadNearbyOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (value) => ({
  payload: value,
}));

export const fillOffersList = createAction(ActionType.FILL_OFFERS_LIST, (value) => ({
  payload: value,
}));

export const sortOffersList = createAction(ActionType.SORT_OFFERS_LIST, (value) => ({
  payload: value,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS,(nearby) => ({
  payload: nearby,
}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

export const requiredAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);
