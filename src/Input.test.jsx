import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  //   describe("word has NOT been guessed", () => {
  //     const initialState = { success: false };
  //     const wrapper = setup(initialState);
  //     test("renders the component", () => {
  //       const component = findByTestAttr(wrapper, "component-input");
  //       expect(component.length).toBe(1);
  //     });
  //     test("renders the input field", () => {
  //       const inputField = findByTestAttr(wrapper, "field");
  //       expect(inputField.length).toBe(1);
  //     });
  //     test("renders the submit button", () => {
  //       const button = findByTestAttr(wrapper, "button");
  //       expect(button.length).toBe(1);
  //     });
  //   });
  describe("word has been guesed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test("renders the component", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("Doesn't render the input field", () => {
      const inputField = findByTestAttr(wrapper, "field");
      expect(inputField.length).toBe(0);
    });
  });
});
