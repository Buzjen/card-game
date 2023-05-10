import { createSlice } from "@reduxjs/toolkit";
import { Words } from "../../assets";

// function word(ruVersion, EnVersion) {
//   this.ruVersion = ruVersion;
//   this.EnVersion = EnVersion;
//   this.count = 0;
// }

const initialState = {
  words: Words,
};

export const wordSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    incrimentCount(state, action) {},
    addWords(state, action) {
      state.words.push({ ...action.payload, count: 0 });
      localStorage.setItem("key", action.payload.words);
    },
    deleteWords(state, action) {},
  },
});

export const { addWords, deleteWords } = wordSlice.actions;

export default wordSlice.reducer;
