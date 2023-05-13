import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLanguage: "",
};

export const wordSlice = createSlice({
  name: "currentLanguage",
  initialState,
  reducers: {
    switchToRussian(state) {},
    switchToEnglish(state) {},
  },
});
