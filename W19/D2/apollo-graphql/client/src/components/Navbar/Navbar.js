import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <header>
      <nav>
        <Link to="/authors">Authors</Link>
        <Link to="/">Books</Link>
        <Link to="/profile">me</Link>
      </nav>
    </header>
  );
};

export default Navbar;
