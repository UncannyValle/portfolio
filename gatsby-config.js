module.exports = {
  siteMetadata: {
    title: `Julian Valle's Portfolio`,
    description: `Front-end web developer with an eye for detail! I make sites, apps and tacos!`,
    author: `@uncannyvalle`,
    siteUrl: `https://julianvalle.dev`,
    keywords: `developer, frontend, react, jamstack, gatsby, web developer, javascript, web design, Vue, Ruby, fullstack, front-end, full-stack, react.js`,
    image: `/src/images/SEOthumbnail.png`,
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
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Julian Valle's Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        preconnect: ["https://fonts.gstatic.com"],
        mode: "render-blocking",

        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Roboto",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Roboto",
          },
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Audiowide",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Audiowide",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
