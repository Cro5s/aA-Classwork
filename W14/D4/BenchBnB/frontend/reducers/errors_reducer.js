import { combineReducers } from "redux";
import { sessionErrorsReducer } from "./session_errors_reducer";

export default errorsReducer = () => {
  return combineReducers({
    session: sessionErrorsReducer,
  });
};