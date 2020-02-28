import { 
  RECEIVE_SESSION_ERRORS, 
  RECEIVE_CURRENT_USER 
} from "../actions/session_actions";

export default sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, { session: action.errors })
    case RECEIVE_CURRENT_USER:
      let newState = { session: action.errors }
      newState[session] = null;
      return newState;
    default:
      return state;
  };
};