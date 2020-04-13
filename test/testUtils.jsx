import checkPropTypes from "check-prop-types";
import RootReducer from "../src/reducers";
import { createStore } from "redux";

export const storeFactory = (initialState) => {
  return createStore(RootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
