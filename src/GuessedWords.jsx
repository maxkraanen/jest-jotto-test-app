import React from "react";
import PropTypes from "prop-types";

function GuessedWords(props) {
  const { guessedWords } = props;

  const displayInitial = <div data-test="display-initial">Make a guess</div>;

  const displayGuessedWords = (
    <div data-test="guessed-section">
      {guessedWords.map((guess, index) => (
        <div data-test="guessed-word" key={index}>
          {guess.guessedWord}
        </div>
      ))}
    </div>
  );

  return (
    <div data-test="component-guessedwords">
      {guessedWords.length === 0 ? displayInitial : displayGuessedWords}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
