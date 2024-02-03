"use client";

import { useState } from "react";
import HangmanBody from "./HangmanBody";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanWord from "./HangmanWord";
import Modal from "./Modal";
import { getNewWord } from "@/app/words";

const Hangman: React.FC<{ word: string }> = ({ word }) => {
  const [currentWord, setCurrentWord] = useState(word);
  const [selectedLetters, setSelectedLetters] = useState<Array<string>>([]);
  const [correctLetters, setCorrectLetters] = useState<Array<string>>([]);

  const errorScore = selectedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const keyClickHandler = (letter: string) => {
    setSelectedLetters((prev) => [...prev, letter]);
    if (currentWord.includes(letter)) {
      setCorrectLetters((prev) => [...prev, letter]);
    }
  };

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
