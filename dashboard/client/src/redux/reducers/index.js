import { combineReducers } from "redux";
import userReducer from "./userReducer";
import serviceReducer from "./serviceReducer";
const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
});
export default rootReducer;
