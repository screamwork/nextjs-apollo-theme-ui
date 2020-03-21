import gql from "graphql-tag";

export const postQuery = gql`
  query($slug: String!) {
    postBy(slug: $slug) {
      postId
      guid
      status
      date
      title
      author {
        avatar {
          url
        }
        username
      }
      commentCount
      featuredImage {
        sourceUrl
      }
      tags {
        nodes {
          slug
        }
      }
      content
    }
  }
`;
