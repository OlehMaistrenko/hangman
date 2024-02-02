const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
type HangmanKeyboardProps = {
  disabledLetters: Array<string>;
  onKeyClick: (letter: string) => void;
};

const HangmanKeyboard = ({
  disabledLetters,
  onKeyClick,
}: HangmanKeyboardProps) => {
  return (
    <div className="grid grid-cols-9 gap-2 text-center sm:gap-4">
      {ALPHABET.map((letter) => (
        <button
          key={letter}
          disabled={disabledLetters.includes(letter)}
          onClick={() => onKeyClick(letter)}
          className=" text-md cursor-pointer rounded-md border-2 border-teal-700  p-1 uppercase text-teal-700 hover:bg-teal-200 disabled:pointer-events-none disabled:opacity-30 sm:p-2 sm:text-2xl"
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default HangmanKeyboard;
