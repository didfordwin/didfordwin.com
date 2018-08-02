module.exports = {
  siteMetadata: {
    author: `Ransom Olds`,
    siteUrl: `https://didfordwin.com`,
    title: `Did Ford Win?`,
    whoWeAre: `We are a bipartisan group of Ontario residents who are deeply curious about the 2018 Ontario PC leadership election.`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-123363288-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: []
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',

        // WebApp Manifest Configuration
        appName: 'Did Ford Win?',
        appDescription:
          'Did Doug Ford really win the Ontario 2018 PC leadership election?',
        developerName: 'Ransom Olds',
        developerURL: 'https://didfordwin.com',
        dir: 'auto',
        lang: 'en-CA',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: true,
          yandex: false,
          windows: true
        }
      }
    }
  ]
};
