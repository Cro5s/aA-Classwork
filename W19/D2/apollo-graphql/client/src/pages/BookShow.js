import React from "react";
import BookDetails from "../components/books/BookDetails";
import Navbar from "../components/Navbar";

const BookShow = props => {
  const { bookId } = props.match.params;

  return (
    <>
      <Navbar />
      <h1>Book Show Page</h1>
      <BookDetails bookId={bookId} />
    </>
  );
};

export default BookShow;
