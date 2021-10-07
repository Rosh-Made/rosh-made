/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "RoshMade",
    description: "Personal Blog",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-DRN4BB93PS", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,

          exclude: ["/admin/**"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-firebase-messaging`,
      options: {
        config: {
          apiKey: "AIzaSyAx2XvriVPrZ_H1kBk9JBGILTrrv7UoNz4",
          projectId: "roshmade-blog",
          messagingSenderId: "431525069130",
          appId: "1:431525069130:web:00aa1ba10a3419ced4c1b3",
        },
        firebaseVersion: "8.1.1",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-material-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "blk1qtk",
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/assets`,
        name: "assets",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-embed-video`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/svg`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms.js`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
