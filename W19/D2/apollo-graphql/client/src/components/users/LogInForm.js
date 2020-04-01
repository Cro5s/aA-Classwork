import React, { useState } from "react";
import LOG_IN from "../../graphql/mutations/users";
import { IS_LOGGED_IN, CURRENT_USER } from "../../graphql/queries/user";
import { useMutation } from "@apollo/react-hooks";

function LoginForm(props) {
  const initialState = {
    username: "",
    password: ""
  };
  const [user, setUser] = useState(initialState);
  const [dispatcher, { loading, error }] = useMutation(LOG_IN);

  const handleSubmit = e => {
    e.preventDefault();

    dispatcher();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input
        type="text"
        value={user.username}
        onChange={e => setUser({ ...user, username: e.target.value })}
      />
      <label>Password: </label>
      <input
        type="password"
        value={user.password}
        onChange={e => setUser({ ...user, password: e.target.value })}
      />

      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
