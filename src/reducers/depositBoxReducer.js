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
    default:
      return state;
  }
};
