import React from "react";
import { Provider } from "react-redux";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";

export function Root({store}) {
  return <Provider store={store}>
    <div>Hello, Trainers!</div>
    <PokemonIndexContainer />
  </Provider>
}