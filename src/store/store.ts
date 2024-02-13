import { configureStore } from "@reduxjs/toolkit";
import hoverReducer from "./hover/hoverSlice";

export const store = configureStore({
  reducer: {
    hoverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
