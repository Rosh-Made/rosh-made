import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyLink } from "gatsby-theme-material-ui"

interface Post {
  id: string
  frontmatter: Frontmatter
  excerpt: string
  fields: Fields
}

interface Fields {
  slug: string
}

interface Frontmatter {
  date: string
  title: string
  author: string
}

const Blog: FC = () => {
  const data = useStaticQuery(graphql`
    query BlogPageQuery {
      blog: allMarkdownRemark {
        posts: nodes {
          fields {
            slug
          }
          frontmatter {
            date(fromNow: true)
            title
          }
          excerpt
          id
        }
      }
    }
  `)
  return (
    <div>
      <h1>Blog posts</h1>
      {data.blog.posts.map((post: Post) => (
        <article key={post.id}>
          <h2>
            <GatsbyLink to={post.fields.slug}>
              {post.frontmatter.title}
            </GatsbyLink>
          </h2>
          <small>{post.frontmatter.date}</small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

export default Blog
