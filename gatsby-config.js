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
    `gatsby-plugin-netlify-cms`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`raleway`, `source-sans-pro`],
        display: "swap",
      },
    },
    `gatsby-plugin-styled-components`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
  ],
}
