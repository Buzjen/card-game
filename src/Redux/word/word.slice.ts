import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Word, Words } from "../../assets";

interface wordState {
  words: Word[];
}

const initialState: wordState = {
  words: Words,
};

export const wordSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    incrementCount(state, action) {},
    addWords(state, action: PayloadAction<Word>) {
      state.words.push({ ...action.payload, count: 0 });
      alert("Word is Added");
    },
    deleteWords(state, action) {
      console.log(`action.payload = ${action.payload}`);
      state.words.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addWords, incrementCount, deleteWords } = wordSlice.actions;

export default wordSlice.reducer;
