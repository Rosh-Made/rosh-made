const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogs = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  blogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

  const pages = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "page" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/page.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
