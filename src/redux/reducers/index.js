/** @format */

import { combineReducers } from "redux";
import transReducer from "./transReducer";

export default combineReducers({
  trans: transReducer
});
