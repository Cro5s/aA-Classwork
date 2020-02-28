import { combineReducers } from "redux";
import { usersReducer } from "./users_reducer";

export function entitiesReducer() {
  return combineReducers({
    users: usersReducer,
  });
}