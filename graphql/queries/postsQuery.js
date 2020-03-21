import gql from "graphql-tag";

export const postsQuery = gql`
  query {
    posts {
      nodes {
        postId
        date
        title
        slug
        author {
          avatar {
            url
          }
          nickname
        }
        tags {
          nodes {
            slug
          }
        }
        test {
          title
        }
        featuredImage {
          sourceUrl
        }
        excerpt
        content
      }
    }
  }
`;
