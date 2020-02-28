import React from "react";
import ReactDOM from "react-dom";
import * as APIUtil from "./util/session_api_util";
import { configureStore } from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.getState = store.getState; // Remove from window
  window.dispatch = store.dispatch; // Remove from window
  window.signUp = APIUtil.signUp;
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
