import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { adminApi } from "./api/adminApi";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<TAppState>();
export const useAppDispatch = useDispatch.withTypes<TAppDispatch>();
