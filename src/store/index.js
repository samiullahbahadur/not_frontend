import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { sectorApi } from "./sectorSlice";
import { userApi } from "./userSlice";

export const store = configureStore({
  reducer: {
    [sectorApi.reducerPath]: sectorApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      sectorApi.middleware,
      userApi.middleware
    );
  },
});

setupListeners(store.dispatch);
