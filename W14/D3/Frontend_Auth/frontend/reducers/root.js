import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from "../reducers/session"

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
});
