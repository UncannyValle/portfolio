module.exports = {
  siteMetadata: {
    title: `The Uncanny Valle | Julian Valle's Portfolio`,
    titleTemplate: `%s | Julian Valle's Portfolio`,
    description: `Front-end web developer with an eye for detail! I make sites, apps and tacos!`,
    author: `Julian Valle`,
    siteUrl: `https://theuncannyvalle.com`,
    image: `/selfie.jpg`,
    imageAlt: `Me drinking some coffee before coding.`,
    twitterUsername: `@theuncannyvalle`,
    twitter: `https://twitter.com/theuncannyvalle`,
    gitHub: `https://github.com/uncannyvalle`,
    linkedIn: `https://linkedin/in/uncannyvalle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

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

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Roboto",
            "Titillium Web",
            "Bungee Shade",
            "Bungee Inline",
            "Bungee"
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
