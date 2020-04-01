import React from "react";
import AuthorDetails from "../components/authors/AuthorDetails";
import Navbar from "../components/Navbar";

const AuthorShow = props => {
  const { authorId } = props.match.params;
  return (
    <div>
      <Navbar />
      <h1>Author show page</h1>
      <AuthorDetails authorId={authorId} />
    </div>
  );
};

export default AuthorShow;
