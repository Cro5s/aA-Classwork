import React from "react";
import BookList from "../components/books/BookList";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";

const BookIndex = props => {
  return (
    <div>
      <NavBar />
      <h1>Book Index Page</h1>
      <h3>
        <Link to="/authors">Authors</Link>
      </h3>
      <BookList />
    </div>
  );
};

export default BookIndex;
