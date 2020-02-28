import React from "react";
import { Provider } from "react-redux";

export function Root({ store }) {
  return (
    <Provider store={ store }>// Router goes here...</Provider>
  );
}