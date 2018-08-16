import Link from 'gatsby-link';
import React from 'react';
import { maxWidthMobile } from '../utils/constants';

const strongSpan = {
  fontWeight: '1',
  display: 'none',
  [`@media(min-width: ${maxWidthMobile})`]: {
    display: 'inline'
  },
  [`@media(max-width: ${maxWidthMobile})`]: {
    display: 'none'
  }
};

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
      <Link to="/about">About</Link> <strong css={strongSpan}>{' | '}</strong>
      <Link to="/issues">Issues</Link> <strong css={strongSpan}>{' | '}</strong>
      <a href="#privacy" title="Our commitment to privacy">
        Privacy
      </a>
    </nav>
  );
};
