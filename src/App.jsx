import React from "react";
import { Provider } from "react-redux";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import store from "./configureStore";

import "./App.css";

const guessedWords = [
  { guessedWord: "train", letterMatchCount: 2 },
  { guessedWord: "plane", letterMatchCount: 3 },
];

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Jotto</h1>
        <p>Guess the word</p>
        <Congrats success={false} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    </Provider>
  );
}

export default App;
