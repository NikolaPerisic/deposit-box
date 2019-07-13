import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLocked: false,
  isTouched: false,
  isBusy: false,
  backlightOn: true,
  code: null,
  serviceMode: false,
  serialNo: 4815162342,
  displayMsg: "Ready",
  key: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_INPUT:
      return {
        ...state,
        isTouched: true,
        backlightOn: true,
        displayMsg: state.displayMsg + action.payload,
        key: action.payload
      };
    case actionTypes.HANDLE_LOCK:
      return {
        ...state,
        isLocked: true,
        isBusy: false,
        serviceMode: false,
        displayMsg: ""
      };
    case actionTypes.HANDLE_UNLOCK:
      return {
        ...state,
        isLocked: false,
        isBusy: false,
        serviceMode: false,
        displayMsg: "Ready"
      };
    case actionTypes.RESET:
      return {
        ...state,
        isTouched: false,
        isBusy: false,
        displayMsg: ""
      };
    case actionTypes.ERROR:
      return {
        ...state,
        displayMsg: "Error",
        isBusy: true,
        serviceMode: false,
        isTouched: false
      };
    case actionTypes.LOCKING:
      return {
        ...state,
        displayMsg: "Locking...",
        code: action.payload,
        isTouched: false,
        isBusy: true
      };
    case actionTypes.UNLOCKING:
      return {
        ...state,
        displayMsg: "Unlocking...",
        code: null,
        isTouched: false,
        isBusy: true
      };
    case actionTypes.SERVICE:
      return {
        ...state,
        displayMsg: "Service",
        serviceMode: true,
        isTouched: false
      };
    case actionTypes.VALIDATING:
      return {
        ...state,
        displayMsg: "Validating...",
        isTouched: false,
        isBusy: true
      };
    case actionTypes.BACKLIGHT_OFF:
      return {
        ...state,
        backlightOn: false,
        isTouched: false,
        displayMsg: "Ready"
      };
    case actionTypes.RESET_KEY:
      return {
        ...state,
        key: null
      };
    default:
      return state;
  }
};
