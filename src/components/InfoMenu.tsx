import React from "react";

interface InfoMenuProps {
  showInfo: () => void;
}

export const InfoMenu: React.FC<InfoMenuProps> = ({ showInfo }) => {
  return (
    <div className="h-[90vh] w-[30vh] flex-none justify-center">
      <div className="flex justify-center">
        <p className="flex justify-center px-2 py-2 text-lg">
          Each word has a timer, you need to write its translation correctly
          three times in a row, if you make a mistake, timer will be reset. You
          can also change the language or add words by going to the Advanced
          Settings tab.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={showInfo}
          className="border text-xl h-10 w-32 mt-14 bg-red-400 hover:bg-red-600 rounded-md transition-all text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};
