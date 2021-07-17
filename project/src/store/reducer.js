import {ActionType} from "./action";
import offers from "../mocks/offers";

const initialState = {
  city: '',
  offers: {offers},
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state.city,
        offers: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
