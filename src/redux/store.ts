import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({

});

export const store = configureStore({
  reducer: rootReducer,
})

export type TState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
