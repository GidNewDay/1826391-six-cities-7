import {ActionType} from './action';
import offers from '../mocks/offers';//
import {SortType, AuthorizationStatus} from '../const';

const initialState = {
  activeCity: 'Paris',//''
  offers: offers,//[]
  sortVal: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      }
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      }
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    default:
      return state;
  }
};

export default reducer;
