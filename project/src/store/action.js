export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  FILL_OFFERS_LIST: 'main/fillOffersList',
  SORT_OFFERS_LIST: 'main/sortOffersList',
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
};
