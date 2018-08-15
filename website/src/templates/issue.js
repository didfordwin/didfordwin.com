import React from 'react';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <article>
      <header>
        <h2>{post.frontmatter.title}</h2>
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
};

export const query = graphql`
  query IssueQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
