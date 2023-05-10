import React from "react";

export const StartButton = ({ gameSession }) => {
  return (
    <div className="flex justify-center items-center pt-20">
      <button
        onClick={gameSession}
        className="border h-16 w-40 bg-pink-300 hover:bg-pink-400 rounded-md text-4xl transition-all"
      >
        Start
      </button>
    </div>
  );
};
