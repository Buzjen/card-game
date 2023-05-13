import React, { useState } from "react";
import { useDebounce } from "../Hooks/useDebounce";

import { LANGUAGES } from "../assets";
import { StartButton } from "./Buttons/StartButton";
import { ConfirmButton } from "./Buttons/ConfirmButton";
import { RestartButton } from "./Buttons/RestartButton";
import { Correct } from "./ResponseStatus/Correct";
import { Failed } from "./ResponseStatus/Failed";
import { useSelector } from "react-redux";

interface ContentProps {
  currentLanguage: LANGUAGES;
  inGame: boolean;
  gameSession: () => void;
  setInGame: (arg: boolean) => void;
}

export const Content: React.FC<ContentProps> = ({
  currentLanguage,
  inGame,
  gameSession,
  setInGame,
}) => {
  const { words } = useSelector((state) => state.wordSlice);
  const [myAnswer, setMyAnswer] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [correct, setCorrcet] = useState(false);
  const [responseStatus, setResponseStatus] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [buffer, setBuffer] = useState(false);
  const [helpInfo, setHelpInfo] = useState(false);

  const answer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMyAnswer(e.target.value);
  };

  const debounce = useDebounce(answer);

  const valiadationWord = () => {
    if (
      (currentLanguage === LANGUAGES.ru &&
        myAnswer.toLowerCase() ===
          words[currentWord][LANGUAGES.en].toLowerCase()) ||
      (currentLanguage === LANGUAGES.en &&
        myAnswer.toLowerCase() ===
          words[currentWord][LANGUAGES.ru].toLowerCase())
    ) {
      setCorrcet(true);
      setResponseStatus(true);
    } else {
      setCorrcet(false);
      setResponseStatus(true);
    }
  };

  const showBuffer = () => {
    setBuffer(true);
    valiadationWord();
    setMyAnswer("");
  };

  const nextWord = () => {
    if (currentWord + 1 === words.length) {
      setCurrentWord(currentWord - words.length + 1);
      setGameIsOver(true);
      setInGame(false);
      setHelpInfo(false);
    } else {
      setCurrentWord(currentWord + 1);
      setHelpInfo(true);
    }
    setBuffer(false);
    setResponseStatus(false);
  };

  const restartGame = () => {
    setGameIsOver(false);
    setInGame(true);
  };

  return (
    <div className="flex-none justify-center shadow-md ml-10 mb-20 h-auto w-[1000px] bg-gray-100 rounded-lg relative">
      <div className="flex justify-center border-b rounded-t-md text-xl bg-red-500 text-white">
        <h3 className="mt-4 mb-4 text-xl">Game</h3>
      </div>
      {!buffer ? (
        <div className="flex-none justify-center m-4">
          <div className="border-b-2">
            {helpInfo && (
              <p className="flex justify-center mb-2 text-xl">
                You need to write a translation of this word from Russian or
                English
              </p>
            )}
          </div>
          {!inGame ? (
            <>
              <div className="flex-none justify-center m-4 bottom-5">
                <div className="flex justify-center">
                  {gameIsOver ? (
                    <span className="mt-10 text-xl">
                      <p>
                        Game is over, try to restart or added new words in
                        "Advanced settings"
                      </p>
                    </span>
                  ) : (
                    <label className="mt-4 mb-4 text-8xl border-b-2 bg-white rounded-lg">
                      <h3 className="shadow-lg items-center py-4 px-4 pb-8 min-h-max">
                        {words[currentWord][currentLanguage]}
                      </h3>
                    </label>
                  )}
                </div>
                <div className="flex justify-center mt-10">
                  {!gameIsOver && (
                    <input
                      type="text"
                      className="border h-9 outline-none bg-black text-white py-1 px-2 rounded-md"
                      onChange={debounce}
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-center mt-4 text-xl">
                {gameIsOver ? (
                  <RestartButton restartGame={restartGame} />
                ) : (
                  <ConfirmButton nextWord={showBuffer} />
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center items-center pt-20 text-xl">
                <p>Change the language or start game</p>
              </div>
              <StartButton
                gameSession={gameSession}
                setHelpInfo={setHelpInfo}
              />
            </>
          )}
        </div>
      ) : (
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
      )}
    </div>
  );
};
