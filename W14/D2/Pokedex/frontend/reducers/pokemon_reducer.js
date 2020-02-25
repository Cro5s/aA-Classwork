import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newstate;

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newstate = Object.assign({}, action.pokemon);
      return newstate;
    default:
      return state;
  };
};