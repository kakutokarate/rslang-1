import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from 'redux/features/authSlice/authSlice';
import signInReducer from 'redux/features/signInSlice/signInSlice';

const rootReducer = combineReducers({
  authReducer,
  signInReducer,
});

export const store = configureStore({
  reducer: rootReducer,
})

export type TState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
