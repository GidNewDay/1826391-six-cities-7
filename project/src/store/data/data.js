// Данные
import {ActionType} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  nearby: [],
  comments: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearby: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export {data};
