import React from 'react';
import Link from 'gatsby-link';

export default ({ data }) => {
  return (
    <article>
      <header>
        <h2>About This Site</h2>
      </header>
      <article>
        <header>
          <h3>Purpose</h3>
        </header>
        <p>
          The purpose of this site is to how Doug Ford won the 2018 Ontario PC
          leadership election despite being significantly less qualified than
          his competitors.
        </p>
        <p>
          Now that Ontario has been living with Doug Ford we are able to start
          collecting the evidence we will need to convince the Ontario PC party
          to choose a more qualified leader. Ideally someone with diverse
          private sector experiences and some public sector experience. This
          ideal candidate would be a province builder who could unite the
          province and improve the future of all Ontarians.
        </p>
      </article>
      <article>
        <header>
          <h3>Errors</h3>
        </header>
        <p>
          In the event we have made an error we will update our site with
          ammendments, this could be in the form of content or code depending on
          the type of error that is found.
        </p>
        <p>
          Please either{' '}
          <a
            href="https://twitter.com/didfordwin"
            title="Twitter: Did Ford Win?"
            target="_blank"
          >
            Tweet
          </a>{' '}
          errors to us or add an issue to our{' '}
          <a
            href="https://github.com/didfordwin/didfordwin.com/issues"
            title="GitHub: Did Ford Win?"
            target="_blank"
          >
            GitHub
          </a>{' '}
          issue tracker.
        </p>
      </article>
      <article>
        <header>
          <h3>Contributing</h3>
        </header>
        <p>
          Contributions are welcome. Please message us on{' '}
          <a
            href="https://twitter.com/didfordwin"
            title="Twitter: Did Ford Win?"
            target="_blank"
          >
            Twitter
          </a>{' '}
          or contribute directly to our{' '}
          <a
            href="https://github.com/didfordwin/didfordwin.com"
            title="GitHub: Did Ford Win?"
            target="_blank"
          >
            GitHub
          </a>
        </p>
        <section>
          <header>
            <h4>Help Wanted: Design</h4>
          </header>
          <p>
            If you are good at design (or at least better than our current
            designer) and know CSS and a little React you have a skillset we
            need!
          </p>
        </section>
      </article>
    </article>
  );
};
