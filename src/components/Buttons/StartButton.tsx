interface StartButtonProps {
  gameSession: () => void;
  setHelpInfo: (arg: boolean) => void;
}

export const StartButton: React.FC<StartButtonProps> = ({
  gameSession,
  setHelpInfo,
}) => {
  const firstRound = () => {
    gameSession();
    setHelpInfo(true);
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <button
        onClick={firstRound}
        className="border h-16 w-40 bg-pink-300 hover:bg-pink-400 rounded-md text-4xl transition-all"
      >
        Start
      </button>
    </div>
  );
};
