import {combineReducers} from 'redux';
import {data} from './data/data';
import {mainAction} from './main-action/main-action';
import {user} from './user/user';

export const NameSpace = {
  DATA: 'DATA',
  MAIN: 'MAIN',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.MAIN]: mainAction,
  [NameSpace.USER]: user,
});
