type HangmanWordProps = {
  word: string;
  letters: Array<string>;
};

const HangmanWord = ({ letters, word }: HangmanWordProps) => {
  return (
    <div className="flex shrink-0 justify-center gap-4 p-5">
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className="w-10 rounded-md border-b-4 border-b-teal-700 text-center text-2xl font-medium uppercase text-teal-700 empty:before:inline-block"
        >
          {letters.includes(letter) ? letter : ""}
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
