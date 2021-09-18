import React, { FC } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { Grid } from "@material-ui/core"
import { PostCard } from "../components/Card"

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
  featuredimage: any
  tags: string[]
}

const Container = styled(Grid)`
  margin-top: 0.25rem;
  @media(max-width: 600px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  @midia (min-width: 960px) {
    margin-top: 2rem;
  }
`

const CardContainer = styled(Grid)`
  @media(max-width: 600px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`

const Index: FC<{location:any}> = ({location}) => {

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }

      image: file(base: { eq: "pic1.jpeg" }) {
        relativePath
        publicURL
      }

      blog: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: {frontmatter: {published: {eq: true}}}
      ) {
        posts: nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "LL")
            title
            featuredimage {
              childImageSharp {
                 gatsbyImageData(
                  width: 500
                  aspectRatio: 0.8
                  transformOptions: {cropFocus: CENTER}
                  placeholder: BLURRED
                )
              }
            }
            tags
          }
          excerpt
          id
        }
      }
    }
  `)

  const params = new URLSearchParams(location.search);
  const tag = params.get("tag");

  const posts = data.blog.posts.filter((post: Post) => !tag || post.frontmatter.tags.includes(tag));

  return (
    <Layout>
      <Container spacing={10} container>
        {posts.map((post: Post) => {
          return (
            <CardContainer
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={post.id}
              item
              onClick={() => navigate(post.fields.slug)}
            >
              <PostCard post={post} />
            </CardContainer>
          )
        })}
      </Container>
    </Layout>
  )
}

export default Index
