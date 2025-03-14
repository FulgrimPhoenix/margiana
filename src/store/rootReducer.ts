import { combineReducers } from "@reduxjs/toolkit";
import { adminApi } from "./api/adminApi";
import { productsApi } from "./api/productsApi";

const rootReducer = combineReducers({
  [adminApi.reducerPath]: adminApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export default rootReducer;
