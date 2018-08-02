import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './global.css';

export default ({ children, data }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.whoWeAre} />
      <meta name="author" content={data.site.siteMetadata.author} />
    </Helmet>
    {children()}
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        author
        title
        whoWeAre
      }
    }
  }
`;
