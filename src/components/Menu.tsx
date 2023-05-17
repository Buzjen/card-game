import { useState } from "react";
import { Link } from "react-router-dom";
import { LANGUAGES } from "../assets";
import { InfoMenu } from "./InfoMenu";

interface MenuProps {
  selectOnRuLanguage: () => void;
  selectOnEnLanguage: () => void;
  inGame: boolean;
  currentLanguage: LANGUAGES;
}

export const Menu: React.FC<MenuProps> = ({
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
    <div className="flex-none justify-center shadow-md mb-20 h-[82vh] w-[30vh] bg-gray-100 rounded-lg relative">
      {infoOpen && <InfoMenu showInfo={showInfo} />}
      <div className="flex justify-center border-b rounded-t-md text-xl bg-red-500">
        <h3 className="mt-4 mb-4 text-white">Menu</h3>
      </div>
      <div className="flex-none justify-center">
        <p className="flex justify-center mt-4">Select Language</p>
        <div className="flex justify-center m-auto mt-4">
          <button
            disabled={!inGame}
            onClick={selectOnEnLanguage}
            className="border h-10 w-16 bg-red-200 hover:bg-red-400 rounded-md transition-all"
          >
            English
          </button>
          <button
            disabled={!inGame}
            onClick={selectOnRuLanguage}
            className="border h-10 w-16 bg-red-200 hover:bg-red-400 ml-4 rounded-md transition-all"
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
      <div className="align-middle items-center m-4 border-t-2">
        <div className="flex justify-center mt-10">
          <p>You cannot change the language during a game session !!!</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={showInfo}
            className="border text-xl h-10 w-32 mt-6 bg-red-200 hover:bg-red-400 rounded-md transition-all"
          >
            Info
          </button>
        </div>
      </div>
      <Link to="/Configuration" className="mr-2 text-xl">
        <div className="flex-none justify-center border-t-2 bg-red-500 rounded-b-md absolute bottom-0 w-full hover:bg-red-600 text-white cursor-pointer transition-all">
          <span className="flex items-center justify-center text-center text-xl mt-4 mb-2">
            Advanced Settings
          </span>
        </div>
      </Link>
    </div>
  );
};
