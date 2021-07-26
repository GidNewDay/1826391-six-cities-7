// Действия
import {ActionType} from '../action';
import {SortType} from "../../const";

const initialState = {
  offers: [],
  activeCity: 'Paris',
  sortVal: SortType.POPULAR,
};

const mainAction = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state.city,
        offers: action.payload,
      };
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
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

export {mainAction};
