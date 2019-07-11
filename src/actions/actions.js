import * as actionTypes from "./actionTypes";
import axios from "axios";

export const handleAutoSubmit = (
  code,
  userInput,
  status,
  isBusy,
  service,
  serial
) => {
  return dispatch => {
    if (userInput === "000000" && status) {
      return dispatch(handleService());
    }
    console.log("service mode", service);
    if (service) {
      return dispatch(handleServiceMode(userInput, serial));
    }
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

export const handleServiceMode = (userInput, serial) => {
  return dispatch => {
    console.log("service mode", userInput, serial);
    dispatch(handleValidating());
    setTimeout(() => {
      dispatch(handleValidationCheck(userInput, serial));
    }, 3000);
  };
};

export const handleValidationCheck = (userInput, serial) => {
  return dispatch => {
    axios
      .get(
        `https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?c
    ode=${userInput}`
      )
      .then(response => {
        console.log(response.data.sn, serial);
        if (response.data.sn === serial) {
          dispatch(handleUnlocking());
          setTimeout(() => {
            dispatch(handleUnlock());
          }, 3000);
        } else {
          dispatch(handleError());
          setTimeout(() => {
            dispatch(reset());
          }, 1200);
        }
      })
      .catch(error => {
        console.log(error);
      });
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
