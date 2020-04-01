import React, { useEffect } from "react";
import { CURRENT_USER } from "../../graphql/queries/user";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

const UserDetails = props => {
  const { data, loading, error } = useQuery(CURRENT_USER, {
    fetchPolicy: "network-only"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>Not found</p>;

  const { me } = data;

  return (
    <div>
      <h1>{me.username}</h1>
      <ul>
        {me.books.map(book => (
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
