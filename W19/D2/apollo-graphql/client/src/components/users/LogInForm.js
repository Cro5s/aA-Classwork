import React, { useState } from "react";
import LOG_IN from "../../graphql/mutations/users";
import { IS_LOGGED_IN, CURRENT_USER } from "../../graphql/queries/user";
import { useMutation } from "@apollo/react-hooks";

function LoginForm() {
  const initialState = {
    username: "",
    password: "",
    errorMessage: ""
  };
  const [user, setUser] = useState(initialState);
  const [login, { loading, error }] = useMutation(LOG_IN, {
    variables: {
      ...user
    },
    update(cache, { data: { login } }) {
      console.log("This is the login:", login);
      if (!login) {
        setUser({ ...user, errorMessage: "Invalid Credentials" });
      } else {
        // we can either write to the cache directly or refetch the IS_LOGGED_IN query so other components will update properly
        // cache.writeData({
        //   data: {
        //     loggedIn: login.loggedIn,
        //     me: { _id: login._id, username: login.username }
        //   }
        // });
        localStorage.setItem("token", login.token);
      }
    },
    onError() {
      setUser({ ...user, errorMessage: "Something went wrong" });
    },
    refetchQueries: [{ query: IS_LOGGED_IN }, { query: CURRENT_USER }]
  });

  const handleSubmit = e => {
    e.preventDefault();
    login();
  };

  return (
    <>
      {user.errorMessage}
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

        <button type="submit" disabled={loading}>
          Log In
        </button>
      </form>
    </>
  );
}

export default LoginForm;
