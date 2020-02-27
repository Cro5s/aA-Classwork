import React from "react";
import ReactDOM from "react-dom";
import {signUp, login} from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.signUp = signUp;
  window.login = login;
  
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
