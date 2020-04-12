import React from "react";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

import "./App.css";

const guessedWords = [
  { guessedWord: "train", letterMatchCount: 2 },
  { guessedWord: "plane", letterMatchCount: 3 },
];

function App() {
  return (
    <div className="App">
      <h1>Jotto</h1>
      <p>Guess the word</p>
      <Congrats success={false} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
