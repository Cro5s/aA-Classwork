import gql from 'graphql-tag';

export const BOOK_DATA = gql`
    fragment BookData on Book {
        _id
        title
        author {
            _id
            name
        }
    }
`;

export const AUTHOR_DATA = gql`
    fragment AuthorData on Author {
      _id
      name
      books {
          _id
          title
      }
    }
`;