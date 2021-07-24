export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  FILL_OFFERS_LIST: 'main/fillOffersList',
  SORT_OFFERS_LIST: 'main/sortOffersList',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_COMMENTS: 'data/loadComments',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeCity: (value) => ({
    type: ActionType.CHANGE_CITY,
    payload: value,
  }),
  sortBy: (value) => ({
    type: ActionType.SORT_OFFERS_LIST,
    payload: value,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
