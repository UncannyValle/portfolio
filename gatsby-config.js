module.exports = {
  siteMetadata: {
    title: `Julian Valle's Web Development Portfolio`,
    description: `Web developer extraordinaire! Let me make your new site in style!`,
    author: `Julian Valle`,
    url: `https://theuncannyvalle.com`,
    social: {
      twitter: `@theuncannyvalle`,
    },
    socialLinks: {
      twitter:`https://twitter.com/theuncannyvalle`,
      gitHub:`https://github.com/uncannyvalle`,
      linkedIn:`https://linkedin/in/uncannyvalle`
    },
    organization: {
      name: `Atole Media`,
      url: `https://atolemedia.com`
    },
    keywords: 'Portfolio, web, web design, web development'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Titillium Web`,
            variants: [`400`, `700`],
          },
          {
            family: `Roboto`,
            variants: [`400`, `400i`, `700`],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]    }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-833SXFTRYN`,},
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
