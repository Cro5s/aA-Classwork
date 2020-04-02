import gql from "graphql-tag";

const LOG_IN = gql`
  mutation LogIn($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      _id
      username
      token
      # loggedIn
    }
  }
`;

export default LOG_IN;
