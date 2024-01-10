import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions.ts';
import {UserData} from '../../types/user-data.ts';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};
const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};
export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state,action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
