// Пользователь
import {createReducer} from '@reduxjs/toolkit';
import {requiredAuthorization, logout} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user = createReducer(initialState, (builder ) => {
  builder
    .addCase(requiredAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export {user};
