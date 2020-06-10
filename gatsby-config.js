module.exports = {
  siteMetadata: {
    title: `The Uncanny Valle | Julian Valle's Portfolio`,
    titleTemplate: `%s | Julian Valle's Portfolio`,
    description: `Front-end web developer with an eye for detail! I make sites, apps and tacos!`,
    author: `Julian Valle`,
    url: `https://theuncannyvalle.com`,
    image: `/selfie.jpg`,
    imageAlt: `Me drinking some coffee before coding.`,
    twitterUsername: `@theuncannyvalle`,
    twitter: `https://twitter.com/theuncannyvalle`,
    gitHub: `https://github.com/uncannyvalle`,
    linkedIn: `https://linkedin/in/uncannyvalle`,
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
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     policy: [{ userAgent: '*', allow: '/' }]    }
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168962340-1`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
