// Пользователь
import {createReducer} from '@reduxjs/toolkit';
import {requiredAuthorization, logout, setUserData} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: {},
};

const user = createReducer(initialState, (builder ) => {
  builder
    .addCase(requiredAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(logout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export {user};
