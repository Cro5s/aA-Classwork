import React from "react";
import AuthorList from "../components/authors/AuthorList";
import Navbar from "../components/Navbar";

const AuthorIndex = props => {
  return (
    <div>
      <Navbar />
      <h1>Author index page</h1>
      <AuthorList />
    </div>
  );
};

export default AuthorIndex;
