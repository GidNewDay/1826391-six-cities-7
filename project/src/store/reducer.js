import {ActionType} from './action';
import offers from '../mocks/offers';
import {SortType} from '../const';

const initialState = {
  activeCity: 'Paris',
  offers: offers,
  sortVal: SortType.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state.city,
        offers: action.payload,
      };
    case ActionType.SORT_OFFERS_LIST:
      return {
        ...state,
        sortVal: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
