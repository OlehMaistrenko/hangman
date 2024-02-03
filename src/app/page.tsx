import Hangman from "../components/Hangman";
import { getNewWord } from "./words";

export default function Home() {
  return (
    <main className="m-auto h-screen max-w-4xl">
      <Hangman word={getNewWord()} />
    </main>
  );
}
