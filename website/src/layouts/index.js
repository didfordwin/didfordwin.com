import Link from 'gatsby-link';
import React from 'react';
import { Helmet } from 'react-helmet';

import Burger from '../components/hamburger';
import NavMenu from '../components/navigation';
import { maxWidthMobile } from '../utils/constants';

import styles from './global.css';

const centred = { margin: '0 auto', maxWidth: 650, padding: '0 1rem' };
const clear = { clear: 'both' };
const privacy = { backgroundColor: '#DDDDDD', padding: '10px' };

export default ({ children, data }) => (
  <div id="top">
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.whoWeAre} />
      <meta name="author" content={data.site.siteMetadata.author} />
    </Helmet>
    <header style={{ minHeight: '50px', position: 'relative' }}>
      <Link to="/">
        <h1 style={{ float: 'left', padding: '10px' }}>Did Ford Win?</h1>
      </Link>
      <section
        css={{
          [`@media(min-width: ${maxWidthMobile})`]: {
            display: 'none'
          }
        }}
      >
        <Burger>
          <NavMenu />
        </Burger>
      </section>
      <section
        css={{
          float: 'right',
          marginRight: '15px',
          [`@media(max-width: ${maxWidthMobile})`]: {
            display: 'none'
          }
        }}
      >
        <NavMenu />
      </section>
    </header>
    <div style={{ ...centred, ...clear }}>{children()}</div>
    <footer style={centred}>
      <h3>
        <a href="#top">↑</a>
        <span style={{ float: 'right', fontSize: '80%' }}>
          Follow us on{' '}
          <a
            href="https://twitter.com/didfordwin"
            title="Twitter: Did Ford Win?"
            target="_blank"
          >
            Twitter
          </a>
        </span>
      </h3>
      <article id="privacy" style={privacy}>
        <header>
          <h3>Data Privacy</h3>
        </header>
        <p>
          This site does make use of Google analytics with IP anonymization on.
          To the best of our knowledge we capture no personal identifiable
          information. We do however track visits to the site excluding IP
          addresses. We will keep this section up to date as our site evolves.
        </p>
      </article>
    </footer>
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
