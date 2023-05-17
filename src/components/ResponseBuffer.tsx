import React from "react";
import { Correct } from "./ResponseStatus/Correct";
import { Failed } from "./ResponseStatus/Failed";
import { Word } from "../assets";

interface ResponseBufferProps {
  nextWord: () => void;
  responseStatus: boolean;
  correct: boolean;
  words: Word[];
  currentWord: number;
}

export const ResponseBuffer: React.FC<ResponseBufferProps> = ({
  nextWord,
  responseStatus,
  correct,
  words,
  currentWord,
}) => {
  return (
    <div className="align-middle justify-center">
      <div className="flex justify-center mt-10 text-xl">
        For this word, right in a row: {words[currentWord].count}
      </div>
      <div className="flex-none m-auto justify-center mt-16 text-xl">
        {responseStatus && <>{correct ? <Correct /> : <Failed />}</>}
      </div>
      <div className="flex justify-center mt-16">
        <button
          onClick={nextWord}
          className="border h-10 w-40 bg-pink-300 hover:bg-pink-400 rounded-md transition-all text-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};
