import * as actionTypes from "./actionTypes";

export const handleUserInput = value => {
  return {
    type: actionTypes.HANDLE_INPUT,
    payload: value
  };
};
export const reset = () => {
  return {
    type: actionTypes.RESET
  };
};
export const handleLock = () => {
  return {
    type: actionTypes.HANDLE_LOCK
  };
};
export const handleUnlock = () => {
  return {
    type: actionTypes.HANDLE_UNLOCK
  };
};
export const handleError = () => {
  return {
    type: actionTypes.ERROR
  };
};
export const handleLocking = () => {
  return {
    type: actionTypes.LOCKING
  };
};
export const handleUnlocking = () => {
  return {
    type: actionTypes.UNLOCKING
  };
};
export const handleService = () => {
  return {
    type: actionTypes.SERVICE
  };
};
export const handleValidating = () => {
  return {
    type: actionTypes.VALIDATING
  };
};
export const handleBacklight = () => {
  return {
    type: actionTypes.BACKLIGHT_OFF
  };
};
