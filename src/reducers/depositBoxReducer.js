import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLocked: false,
  displayMsg: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_INPUT:
      return {
        ...state,
        displayMsg: (state.displayMsg += action.payload)
      };
    case actionTypes.HANDLE_LOCK:
      return {
        ...state,
        isLocked: true,
        displayMsg: "Ready"
      };
    default:
      return state;
  }
};
