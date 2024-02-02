"use client";
import { useEffect, useState } from "react";
import HangmanBody from "./HangmanBody";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanWord from "./HangmanWord";
import Modal from "./Modal";
const WORDS = [
  "apple",
  "music",
  "happy",
  "pizza",
  "house",
  "beach",
  "tiger",
  "smile",
  "dance",
  "pencil",
  "cloud",
  "river",
  "grape",
  "sunny",
  "bread",
  "heart",
  "ocean",
  "zebra",
  "chair",
  "snake",
  "plane",
  "robot",
  "phone",
  "moon",
  "sugar",
  "horse",
  "jazz",
  "fruit",
  "light",
];
function getNewWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}
const Hangman = () => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [selectedLetters, setSelectedLetters] = useState<Array<string>>([]);
  const [correctLetters, setCorrectLetters] = useState<Array<string>>([]);

  const errorScore = selectedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;
  console.log(currentWord);

  const keyClickHandler = (letter: string) => {
    setSelectedLetters((prev) => [...prev, letter]);
    if (currentWord.includes(letter)) {
      setCorrectLetters((prev) => [...prev, letter]);
    }
  };

  useEffect(() => {
    setCurrentWord(getNewWord());
  }, []);

  const isWinning =
    correctLetters.length === new Set([...currentWord.split("")]).size;

  return (
    <div className="flex h-full flex-col items-center gap-5 p-2 md:p-10">
      <HangmanBody score={errorScore} />
      <HangmanWord word={currentWord} letters={selectedLetters} />
      <HangmanKeyboard
        disabledLetters={selectedLetters}
        onKeyClick={keyClickHandler}
      />
      {isWinning && (
        <Modal>
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-3xl">Congratulations! You have won!</h1>
            <button
              className="rounded-lg bg-teal-500 px-4 py-2 text-white"
              onClick={() => {
                setCurrentWord(getNewWord());
                setSelectedLetters([]);
                setCorrectLetters([]);
              }}
            >
              Play again
            </button>
          </div>
        </Modal>
      )}
      {errorScore >= 6 && !isWinning && (
        <Modal>
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-3xl">You have lost!</h1>
            <button
              className="rounded-lg bg-teal-500 px-4 py-2 text-white"
              onClick={() => {
                setCurrentWord(getNewWord());
                setSelectedLetters([]);
                setCorrectLetters([]);
              }}
            >
              Play again
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Hangman;
