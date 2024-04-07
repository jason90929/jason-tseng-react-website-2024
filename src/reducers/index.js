import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from './loading'
import pageReducer from './pagination'

const rootReducer = () => ({
  loading: loadingReducer,
  pagination: pageReducer
});

const preloadedState = {};
export const store = configureStore({
  reducer: rootReducer(),

  preloadedState
});