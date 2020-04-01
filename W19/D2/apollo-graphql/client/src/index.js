import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import createClient from "./graphql/client";
import gql from "graphql-tag";

createClient().then(client => {
  if (process.env.NODE_ENV !== "production") {
    window.client = client;
    window.gql = gql;
  }

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("root")
  );
});
