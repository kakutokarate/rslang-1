import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createUser } from '../../thunks';
import { IAuthState, ICreatedUser } from './types';

const initialState: IAuthState = {
  isCreatingUser: false,
  userCreationError: null,
  createdUsers: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: {
    [createUser.pending.type]: (state) => {
      state.isCreatingUser = true;
    },

    [createUser.fulfilled.type]: (state, action: PayloadAction<ICreatedUser>) => {
      state.isCreatingUser = false;
      state.userCreationError = null;
      state.createdUsers = [...state.createdUsers, action.payload];
    },

    [createUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isCreatingUser = false;
      state.userCreationError = action.payload;
    },
  }
});

export default authSlice.reducer;