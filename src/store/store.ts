import { configureStore } from "@reduxjs/toolkit";
import hoverReducer from "./hover/hoverSlice";

export const store = configureStore({
  reducer: {
    hoverReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "hover/squareHovered",
          "hover/circleHovered",
          "hover/navHovered",
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
