import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLocked: false,
  isTouched: false,
  backlightOn: true,
  displayMsg: "Ready"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_INPUT:
      return {
        ...state,
        isTouched: true,
        backlightOn: true,
        displayMsg: (state.displayMsg += action.payload)
      };
    case actionTypes.HANDLE_LOCK:
      return {
        ...state,
        isLocked: true,
        isTouched: false,
        displayMsg: ""
      };
    case actionTypes.HANDLE_UNLOCK:
      return {
        ...state,
        isLocked: false,
        isTouched: false,
        displayMsg: ""
      };
    case actionTypes.RESET:
      return {
        ...state,
        isTouched: false,
        displayMsg: ""
      };
    case actionTypes.ERROR:
      return {
        ...state,
        displayMsg: "Error"
      };
    case actionTypes.LOCKING:
      return {
        ...state,
        displayMsg: "Locking..."
      };
    case actionTypes.UNLOCKING:
      return {
        ...state,
        displayMsg: "Unlocking..."
      };
    case actionTypes.SERVICE:
      return {
        ...state,
        displayMsg: "Service"
      };
    case actionTypes.VALIDATING:
      return {
        ...state,
        displayMsg: "Validating..."
      };
    case actionTypes.BACKLIGHT_OFF:
      return {
        ...state,
        backlightOn: false
      };
    default:
      return state;
  }
};
