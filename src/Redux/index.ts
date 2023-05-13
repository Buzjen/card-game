import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./word/word.slice";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: { wordSlice },
  persistedState,
});

store.subscribe(() => {
  localStorage.setItem("NewWords from redux", JSON.stringify(store.getState()));
  // localStorage.removeItem("reduxState", JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
