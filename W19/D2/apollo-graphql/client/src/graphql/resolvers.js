import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    loggedIn: Boolean!
  }
`;

export const resolvers = {
  Query: {
    loggedIn: () => {
      return !!localStorage.getItem("token");
    }
  }
};
