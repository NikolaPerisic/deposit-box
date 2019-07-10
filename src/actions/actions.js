import * as actionTypes from "./actionTypes";

export const handleAutoSubmit = (code, userInput, status, isBusy) => {
  return dispatch => {
    console.log("in autoSubmit");
    console.log(code, userInput, status);
    if (code === userInput && status) {
      dispatch(handleUnlocking());
      setTimeout(() => {
        dispatch(handleUnlock());
      }, 3000);
    } else if (!isBusy) {
      dispatch(handleError());
      setTimeout(() => {
        dispatch(reset());
      }, 1200);
    }
  };
};

export const handleLockFromUser = (userInput, status) => {
  return dispatch => {
    console.log(userInput, status);
    if (userInput.length !== 6 || status) {
      dispatch(handleError());
      setTimeout(() => {
        dispatch(reset());
      }, 1200);
    } else if (userInput.length === 6 && !status) {
      dispatch(handleLocking(userInput));
      setTimeout(() => {
        dispatch(handleLock());
      }, 3000);
    }
  };
};

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
export const handleLocking = code => {
  return {
    type: actionTypes.LOCKING,
    payload: code
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
