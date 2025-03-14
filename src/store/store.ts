import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { adminApi } from "./api/adminApi";
import { useDispatch, useSelector } from "react-redux";
import { productsApi } from "./api/productsApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware, productsApi.middleware),
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppSelector: <TSelected>(
  selector: (state: TAppState) => TSelected
) => TSelected = useSelector;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
