import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { IS_LOGGED_IN } from "./graphql/queries/user";
import BookIndex from "./pages/BookIndex";
import BookShow from "./pages/BookShow";
import AuthorIndex from "./pages/AuthorIndex";
import AuthorShow from "./pages/AuthorShow";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BookIndex} />
        <AuthRoute exact path="/login" component={Login} />
        <ProtectedRoute exact path="/profile" component={UserProfile} />
        <Route path="/books/:bookId" component={BookShow} />
        <Route path="/authors/:authorId" component={AuthorShow} />
        <Route exact path="/authors" component={AuthorIndex} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

const ProtectedRoute = props => {
  const { component, redirectTo = "/login", ...rest } = props;
  const { data, loading, error } = useQuery(IS_LOGGED_IN);

  if (loading) return null;
  if (error || !data) return <Redirect to={redirectTo} />;
  if (data.loggedIn) {
    return <Route component={component} {...rest} />;
  } else {
    return <Redirect to={redirectTo} />;
  }
};

const AuthRoute = props => {
  const { component, redirectTo = "/", ...rest } = props;
  const { data, loading, error } = useQuery(IS_LOGGED_IN);

  if (loading) return null;
  if (error || !data) return <Redirect to={redirectTo} />;
  if (data.loggedIn) {
    return <Redirect to={redirectTo} />;
  } else {
    return <Route component={component} {...rest} />;
  }
};
