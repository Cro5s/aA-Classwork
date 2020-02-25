import { receiveAllPokemon } from "../actions/pokemon_actions";

export const thunk = store => next => action => {
  if (typeof action === "function") {
    return action(store.dispatch);
  } else {
    return next(action);
  };
};