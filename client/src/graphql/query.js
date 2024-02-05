import { gql } from "@apollo/client";

export const queryArticles = gql`
  query {
    articles {
      id
      article
      createdAt
      username
      commentCount
      likeCount
      comments {
        comment
        username
        createdAt
      }
      likes {
        username
      }
    }
  }
`;

export const queryArticle = gql`
  query article($id: ID!) {
    article(id: $id) {
      id
      article
      createdAt
      username
      commentCount
      likeCount
      comments {
        id
        comment
        username
        createdAt
      }
      likes {
        username
      }
    }
  }
`;

export const deletequery = gql`
  mutation delete($id: ID!) {
    delete(deleteinput: { id: $id }) {
      id
    }
  }
`;