import React, { useEffect, useState } from "react";
import { useDebounce } from "../Hooks/useDebounce";

import { LANGUAGES, Words } from "../assets";
import { StartButton } from "./Buttons/StartButton";
import { ConfirmButton } from "./Buttons/ConfirmButton";
import { RestartButton } from "./Buttons/RestartButton";
import { Correct } from "./ResponseStatus/Correct";
import { Failed } from "./ResponseStatus/Failed";

export const Content = ({
  currentLanguage,
  inGame,
  gameSession,
  setInGame,
}) => {
  const [myAnswer, setMyAnswer] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [correct, setCorrcet] = useState(false);
  const [responseStatus, setResponseStatus] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setResponseStatus(false);
    }, 1500);

    return () => {
      clearTimeout(timeId);
    };
  }, [responseStatus]);

  const answer = (e) => {
    setMyAnswer(e.target.value);
  };

  const debounce = useDebounce(answer);

  const valiadationWord = () => {
    if (
      (currentLanguage === LANGUAGES.ru &&
        myAnswer.toLowerCase() ===
          Words[currentWord][LANGUAGES.en].toLowerCase()) ||
      (currentLanguage === LANGUAGES.en &&
        myAnswer.toLowerCase() ===
          Words[currentWord][LANGUAGES.ru].toLowerCase())
    ) {
      setCorrcet(true);
      setResponseStatus(true);
    } else {
      setCorrcet(false);
      setResponseStatus(true);
    }
  };

  const nextWord = () => {
    if (currentWord + 1 === Words.length) {
      setCurrentWord(currentWord - Words.length + 1);
      setGameIsOver(true);
      setInGame(false);
    } else {
      setCurrentWord(currentWord + 1);
    }
    valiadationWord();
    setMyAnswer("");
  };

  const restartGame = () => {
    setGameIsOver(false);
    setInGame(true);
  };

  return (
    <div className="flex-none justify-center shadow-md ml-10 mb-20 h-auto w-[1000px] bg-slate-50 rounded-lg relative">
      <div className="flex justify-center border-b rounded-t-md text-xl bg-pink-500 text-white">
        <h3 className="mt-4 mb-4 text-xl">Game</h3>
      </div>
      <div className="flex-none justify-center m-4">
        <div className="border-b-2">
          <p className="flex justify-center mb-2 text-xl">
            You need to write a translation of this word from Russian or English
          </p>
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
                  <label className="mt-4 mb-4 text-8xl border-b-2">
                    <h3>{Words[currentWord][currentLanguage]}</h3>
                  </label>
                )}
              </div>
              <div className="flex justify-center mt-10">
                {!gameIsOver && (
                  <input
                    type="text"
                    className="border h-9 outline-none bg-black text-white py-1 px-2"
                    onChange={debounce}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-center mt-4 text-xl">
              {gameIsOver ? (
                <RestartButton restartGame={restartGame} />
              ) : (
                <ConfirmButton nextWord={nextWord} />
              )}
            </div>
            {!gameIsOver && responseStatus && (
              <>{correct ? <Correct /> : <Failed />}</>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-center items-center pt-20 text-xl">
              <p>You can change the language or start game</p>
            </div>
            <StartButton gameSession={gameSession} />
          </>
        )}
      </div>
    </div>
  );
};
