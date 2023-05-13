interface RestartButtonProps {
  restartGame: () => void;
}

export const RestartButton: React.FC<RestartButtonProps> = ({
  restartGame,
}) => {
  return (
    <>
      <button
        type="submit"
        onClick={restartGame}
        className="border h-10 w-32 bg-pink-300 hover:bg-pink-400 rounded-md transition-all"
      >
        Restart
      </button>
    </>
  );
};
