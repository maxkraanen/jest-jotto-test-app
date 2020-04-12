import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("returns correct count if there are no matching lettters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test("returns correct count if there are matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test("returns correct count when there are duplicate letters in the guessed word", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
