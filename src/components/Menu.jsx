import { useState } from "react";
import { Link } from "react-router-dom";
import { LANGUAGES } from "../assets";

export const Menu = ({
  selectOnRuLanguage,
  selectOnEnLanguage,
  inGame,
  currentLanguage,
}) => {
  const [infoOpen, setInfoOpen] = useState(false);

  const showInfo = () => {
    setInfoOpen(!infoOpen);
  };

  const lang = () => {
    return currentLanguage === LANGUAGES.en ? "English" : "Russian";
  };

  return (
    <div className="flex-none justify-center shadow-md mb-20 h-auto w-52 bg-slate-50 rounded-lg relative">
      {infoOpen && (
        <div className="w-52 h-screen flex justify-center">
          <div className="flex justify-center">
            <p className="flex justify-center px-2 py-2 text-lg">
              Each word has a timer, you need to write its translation correctly
              three times in a row, if you make a mistake, timer will be reset.
              You can also change the language or add words by going to the
              Advanced Settings tab.
            </p>
          </div>
          <button
            onClick={showInfo}
            className="border text-xl h-10 w-32 mt-10 bg-pink-400 hover:bg-pink-600 rounded-md transition-all absolute bottom-20"
          >
            Close
          </button>
        </div>
      )}
      <div className="flex justify-center border-b rounded-t-md text-xl bg-pink-500">
        <h3 className="mt-4 mb-4 text-white">Menu</h3>
      </div>
      <div className="flex-none justify-center">
        <p className="flex justify-center mt-4">Select Language</p>
        <div className="flex justify-center m-auto mt-4">
          <button
            disabled={!inGame}
            onClick={selectOnEnLanguage}
            className="border h-10 w-16 bg-pink-200 hover:bg-pink-400 rounded-md transition-all"
          >
            English
          </button>
          <button
            disabled={!inGame}
            onClick={selectOnRuLanguage}
            className="border h-10 w-16 bg-pink-200 hover:bg-pink-400 ml-4 rounded-md transition-all"
          >
            Russian
          </button>
        </div>
        <div className="flex justify-center m-auto mt-4">
          <span>
            Current Language:<p className="text-rose-500 text-xl">{lang()}</p>
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center m-4 border-t-2">
        <button
          onClick={showInfo}
          className="border text-xl h-10 w-32 mt-10 bg-pink-200 hover:bg-pink-400 rounded-md transition-all"
        >
          Info
        </button>
      </div>
      <Link to="/Configuration" className="mr-2 text-xl">
        <div className="flex-none justify-center border-t-2 bg-pink-300 rounded-b-md absolute bottom-0 w-full hover:bg-pink-400 cursor-pointer transition-all">
          <span className="flex items-center justify-center text-center text-xl mt-4 mb-2">
            Advanced Settings
          </span>
        </div>
      </Link>
    </div>
  );
};
