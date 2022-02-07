import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISignInState } from './types';
import { signIn } from 'redux/thunks';
import { IAuth } from 'model/IAuth';

const initialState: ISignInState = {
  authUserData: null,
  isSigningIn: false,
  singingInError: null,
};

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setAuthUserData(state, action: PayloadAction<IAuth>) {
      state.authUserData = action.payload;
    },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.isSigningIn = true;
    },
    [signIn.fulfilled.type]: (state, action: PayloadAction<IAuth>) => {
      state.isSigningIn = false;
      state.singingInError = null;
      state.authUserData = action.payload;
      localStorage.setItem('authUserData-zm', JSON.stringify(action.payload))
      console.log(action.payload);
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.singingInError = action.payload;
      console.log(action.payload);
    },
  },
});


export const setAuthUserData = signInSlice.actions.setAuthUserData;
export default signInSlice.reducer;