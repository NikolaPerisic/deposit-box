import * as actions from "./actions";
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
      return dispatch(actions.handleService());
    }
    console.log("service mode", service);
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

export const handleLockFromUser = (userInput, status) => {
  return dispatch => {
    console.log(userInput, status);
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

export const handleServiceMode = (userInput, serial) => {
  return dispatch => {
    console.log("service mode", userInput, serial);
    dispatch(actions.handleValidating());
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
