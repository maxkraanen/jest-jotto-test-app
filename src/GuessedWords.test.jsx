import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }; // props overwrites defaultProps by doing this
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed", () => {
  const wrapper = setup({ guessedWords: [] });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessedwords");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess word", () => {
    const instructions = findByTestAttr(wrapper, "display-initial");
    expect(instructions.text().length).not.toBe(1);
  });
});

describe("If there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 2 },
    { guessedWord: "plane", letterMatchCount: 3 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessedwords");
    expect(component.length).toBe(1);
  });
  test("renders 'guessed words' section", () => {
    const guessedSection = findByTestAttr(wrapper, "guessed-section");
    expect(guessedSection.length).toBe(1);
  });
  test("displays the correct amount of words", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
