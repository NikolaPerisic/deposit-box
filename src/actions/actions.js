import * as actionTypes from "./actionTypes";

export const handleUserInput = value => {
  return {
    type: actionTypes.HANDLE_INPUT,
    payload: value
  };
};

export const handleLock = () => {
  return {
    type: actionTypes.HANDLE_LOCK,
    payload: null
  };
};
