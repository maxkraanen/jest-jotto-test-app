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
  //   const expectedProps = { success: false };
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

describe("If there are words guessed", () => {});
