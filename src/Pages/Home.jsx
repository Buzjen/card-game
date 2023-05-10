import { Menu } from "../components/Menu";
import { Content } from "../components/Content";
import { useState } from "react";
import { LANGUAGES } from "../assets";

export const Home = () => {
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES.en);
  const [inGame, setInGame] = useState(true);

  const gameSession = () => {
    setInGame(!inGame);
  };

  const selectOnEnLanguage = () => {
    setCurrentLanguage(LANGUAGES.en);
  };

  const selectOnRuLanguage = () => {
    setCurrentLanguage(LANGUAGES.ru);
  };

  return (
    <div className="container flex justify-between pt-10 mx-auto h-screen w-screen box-border p-0">
      <Menu
        selectOnRuLanguage={selectOnRuLanguage}
        selectOnEnLanguage={selectOnEnLanguage}
        currentLanguage={currentLanguage}
        inGame={inGame}
      />
      <Content
        currentLanguage={currentLanguage}
        inGame={inGame}
        gameSession={gameSession}
        setInGame={setInGame}
      />
    </div>
  );
};
