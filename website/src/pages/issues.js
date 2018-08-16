import React from 'react';
import Link from 'gatsby-link';

export default ({ data }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} &mdash;&nbsp;
              <span style={{ color: '#BBB', fontSize: '80%' }}>
                {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
