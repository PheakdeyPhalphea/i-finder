import { configureStore } from "@reduxjs/toolkit";
import { iFinderApi } from "./service/i-finder";
import { get } from "http";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [iFinderApi.reducerPath]: iFinderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(iFinderApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
