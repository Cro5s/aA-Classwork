import { combineReducers } from "redux";
import { sessionErrorsReducer } from "./session_errors_reducer";

export function errorsReducer() {
  return combineReducers({
    session: sessionErrorsReducer,
  });
};