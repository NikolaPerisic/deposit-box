import * as actionTypes from "./actionTypes";

export const handleUserInput = value => {
  return {
    type: actionTypes.HANDLE_INPUT,
    payload: value
  };
};
