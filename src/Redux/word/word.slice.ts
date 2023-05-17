import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LANGUAGES, Word, Words } from "../../assets";

interface wordState {
  words: Word[];
}

interface IaddWords extends Record<LANGUAGES, string> {
  id: number;
}

const initialState: wordState = {
  words: Words,
};

export const wordSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    removeCount(state, action: PayloadAction<number>) {
      return {
        ...state,
        words: state.words.map((item) =>
          item.id === action.payload ? { ...item, count: 0 } : item
        ),
      };
    },

    incrementCount(state, action: PayloadAction<number>) {
      return {
        ...state,
        words: state.words.map((item) =>
          item.id === action.payload ? { ...item, count: item.count + 1 } : item
        ),
      };
    },
    addWords(state, action: PayloadAction<IaddWords>) {
      state.words.push({ ...action.payload, count: 0 });
      alert("Word is Added");
    },
    deleteWords(state, action: PayloadAction<number>) {
      alert(`Вы выучили слово ${state.words[action.payload].en}`);
      return {
        ...state,
        words: state.words.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { addWords, incrementCount, deleteWords, removeCount } =
  wordSlice.actions;

export default wordSlice.reducer;
