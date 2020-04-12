import successReducer from "./successReducer";
import { actionTypes } from "../actions/actions";

test("returns default state of false when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("return true if action of type CORRECT_GUESS is passed", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
