import * as actions from "./actions";
import axios from "axios";

// async actions

// autosubmit async for handling service mode, unlocking and error
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
      return dispatch(actions.handleService());
    }
    if (service) {
      return dispatch(handleServiceMode(userInput, serial));
    }
    if (code === userInput && status) {
      dispatch(actions.handleUnlocking());
      setTimeout(() => {
        dispatch(actions.handleUnlock());
      }, 3000);
    } else if (!isBusy) {
      dispatch(actions.handleError());
      setTimeout(() => {
        dispatch(actions.reset());
      }, 1200);
    }
  };
};

/*
handle locking when user inputs L button, checking length of input, if device
is locked, dispatching lock or error to reducer
*/

export const handleLockFromUser = (userInput, status) => {
  return dispatch => {
    if (userInput.length !== 6 || status) {
      dispatch(actions.handleError());
      setTimeout(() => {
        dispatch(actions.reset());
      }, 1200);
    } else if (userInput.length === 6 && !status) {
      dispatch(actions.handleLocking(userInput));
      setTimeout(() => {
        dispatch(actions.handleLock());
      }, 3000);
    }
  };
};

/*
if device is in service mode, autosubmit calls this function with user input and
serial as arguments for handling validation
*/
const handleServiceMode = (userInput, serial) => {
  return dispatch => {
    dispatch(actions.handleValidating());
    setTimeout(() => {
      dispatch(handleValidationCheck(userInput, serial));
    }, 3000);
  };
};

/*
handling api call to provided endpoint, checking if response matches the serial
no. from device, dispatch unlocking or error
*/
const handleValidationCheck = (userInput, serial) => {
  return dispatch => {
    axios
      .get(
        `https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?c
      ode=${userInput}`
      )
      .then(response => {
        if (response.data.sn === serial) {
          dispatch(actions.handleUnlocking());
          setTimeout(() => {
            dispatch(actions.handleUnlock());
          }, 3000);
        } else {
          dispatch(actions.handleError());
          setTimeout(() => {
            dispatch(actions.reset());
          }, 1200);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

// clearing last value enetered from keypad, for styling keypad btns
export const resetKeyPress = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(actions.resetKey());
    }, 200);
  };
};
