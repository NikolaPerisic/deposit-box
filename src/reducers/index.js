import { combineReducers } from "redux";
import depositBoxReducer from "./depositBoxReducer";

export default combineReducers({
  depositBox: depositBoxReducer
});
