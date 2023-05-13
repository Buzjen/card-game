interface ConfirmButtonProps {
  nextWord: () => void;
}

export const ConfirmButton: React.FC<ConfirmButtonProps> = ({ nextWord }) => {
  return (
    <>
      <button
        type="submit"
        onClick={nextWord}
        className="border h-10 w-32 bg-pink-300 hover:bg-pink-400 rounded-md transition-all text-xl"
      >
        Confirm
      </button>
    </>
  );
};
