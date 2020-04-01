import React from "react";
import { useApolloClient } from "@apollo/react-hooks";

const LogOutButton = () => {
  const client = useApolloClient();

  return (
    <button
      onClick={() => {
        client.resetStore();
      }}
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
