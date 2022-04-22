module.exports = {
  siteMetadata: {
    title: `FrontEnd Dev`,
    titleTemplate: "%s | Julian Valle's Portfolio",
    defaultTitle: `Julian Valle's Portfolio`,
    description: `Web developer with an eye for detail. I make sites, apps and tacos!`,
    author: `@uncannyvalle`,
    url: `https://julianvalle.dev`,
    defaultKeywords: `developer, frontend, react, jamstack, gatsby, web developer, javascript, web design, Vue, Ruby, fullstack, front-end, full-stack, react.js`,
    image: `/SEOthumbnail.png`,
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
            name: "Archivo",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Archivo",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-7L7K1H3SB3", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}
