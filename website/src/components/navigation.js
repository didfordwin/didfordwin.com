import Link from 'gatsby-link';
import React from 'react';
import { maxWidthMobile } from '../utils/constants';

export default () => {
  return (
    <nav
      css={{
        [`@media(max-width: ${maxWidthMobile})`]: {
          '& *': {
            display: 'block'
          }
        }
      }}
    >
      <Link to="/issues">Issues</Link>{' '}
      <strong
        css={{
          fontWeight: '1',
          display: 'none',
          [`@media(min-width: ${maxWidthMobile})`]: {
            display: 'inline'
          }
        }}
      >
        {' | '}
      </strong>
      <a href="#privacy" title="Our commitment to privacy" css={{}}>
        Privacy
      </a>
    </nav>
  );
};
