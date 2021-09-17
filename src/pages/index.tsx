import React, { FC } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { Grid } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"

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

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const Image = styled.div`
  width: 100%;
  .deco {
    width: 100%;
    padding-top: 125%;
    background-size: cover;
    background-position: center center;

    @media (min-width: 769px) {
      opacity: 1;
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
    }
  }

  :hover {
    @media (min-width: 769px) {
      opacity: 0.65;
    }
  }
`

const Container = styled(Grid)`
  margin-top: 2rem;
`

const Date = styled.div`
  margin-top: 1.5rem;
  font-family: raleway, sans-serif;
  color: #8b9a72;
`

const Title = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: freight-sans-pro, sans-serif;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 200;
  text-align: center;
`

const Separator = styled.div`
  border-top: #8b9a72 solid 1px;
  width: 1.5rem;
`

const Tags = styled.div`
  margin-top: 1.1rem;
  font-family: raleway, sans-serif;
  display: flex;
  gap: 4px;
  font-size: 0.6rem;
  color: #1f1f1f;
  text-transform: uppercase;
`

const Index: FC = () => {
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
                fluid(quality: 100, maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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

  return (
    <Layout>
      <Container spacing={10} container>
        {data.blog.posts.map((post: Post) => {
          const imageData = post.frontmatter.featuredimage.childImageSharp.fluid

          return (
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={post.id}
              item
              onClick={() => navigate(post.fields.slug)}
            >
              <Card>
                <Image>
                  <BackgroundImage
                    className="deco"
                    Tag="div"
                    fluid={imageData}
                    backgroundColor="#ffffff"
                  />
                </Image>
                <Date>{post.frontmatter.date}</Date>
                <Title>{post.frontmatter.title}</Title>
                <Separator />
                <Tags>
                  {post.frontmatter.tags?.map(tag => (
                    <div>{tag}</div>
                  ))}
                </Tags>
              </Card>
            </Grid>
          )
        })}
      </Container>
    </Layout>
  )
}

export default Index
