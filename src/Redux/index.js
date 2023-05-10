import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./word/word.slice";

export const store = configureStore({
  reducer: { wordSlice },
});
