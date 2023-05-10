import { useState } from "react";
import { useDebounce } from "../Hooks/useDebounce";
import { useDispatch } from "react-redux";
import { addWords } from "../Redux/word/word.slice";
import { LANGUAGES } from "../assets";

export const Configuration = () => {
  const [russianWord, setRussianWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");
  const dispatch = useDispatch();

  const addWordsToStorage = () => {
    const newWord = {
      [LANGUAGES.en]: englishWord,
      [LANGUAGES.ru]: russianWord,
    };
    if (englishWord.length && russianWord.length !== 0) {
      dispatch(addWords(newWord));
    }
  };

  const russian = (e) => {
    setRussianWord(e.target.value);
  };

  const english = (e) => {
    setEnglishWord(e.target.value);
  };

  const debounceRu = useDebounce(russian);
  const debounceEn = useDebounce(english);

  return (
    <div className="container flex justify-center mx-auto relative h-[580px] mb-20">
      <div className="mt-10 border rounded-md bg-pink-50 h-auto w-[600px]">
        <span className="flex justify-center border-b-2">
          <h2 className="text-xl mt-2 mb-2">Advanced Settings</h2>
        </span>
      </div>
      <div className="items-center absolute bottom-0 mb-[180px] w-[432px]">
        <p className="flex mb-10 justify-center text-xl border-b-2">
          Add word with translate
        </p>
        <div className="flex justify-between text-xl">
          <label>Russian</label>
          <label>English</label>
        </div>
      </div>
      <div className="items-center absolute bottom-0 mb-10">
        <input
          type="text"
          onChange={debounceRu}
          className="order h-9 outline-none bg-black text-white py-1 px-2"
        />
        <input
          type="text"
          onChange={debounceEn}
          className="border ml-10 h-9 outline-none bg-black text-white py-1 px-2"
        />
        <div
          onClick={addWordsToStorage}
          className="flex items-center justify-center mt-10 text-xl w-auto h-9 border rounded-md bg-pink-300 hover:bg-pink-400 cursor-pointer transition-all"
        >
          <p>Added Words</p>
        </div>
      </div>
    </div>
  );
};
