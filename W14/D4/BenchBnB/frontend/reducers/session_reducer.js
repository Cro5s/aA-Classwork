import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

export default function sessionReducer(state = { id: null }, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      let newState = Object.assign({}, state);
      newState[id] = null;
      return newState
    default:
      return state;
  };
}