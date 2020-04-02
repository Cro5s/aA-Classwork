import gql from "graphql-tag";

export const CURRENT_USER = gql`
  query CurrentUser {
    me {
      _id
      username
      books {
        _id
        title
      }
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query loggedIn {
    loggedIn @client
  }
`;
