import React, { FC } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Grid } from "@material-ui/core"

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
  featuredimage: string
  tags: string[]
}

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.div`
  width: 100%;
  padding-top: 125%;
  background-size: cover;
  background-position: center center;
`

const Container = styled(Grid)`
  margin-top: 2rem;
`

const Date = styled.div`
  margin-top: 1.5rem;
  font-family: "raleway";
  color: #8b9a72;
`

const Title = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: "raleway";
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 200;
`

const Separator = styled.div`
  border-top: #8b9a72 solid 1px;
  width: 2rem;
`

const Tags = styled.div`
  margin-top: 1.5rem;
  font-family: "raleway";
  display: flex;
  gap: 4px;
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

      blog: allMarkdownRemark {
        posts: nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "LL")
            title
            featuredimage
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
        {data.blog.posts.map((post: Post) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={post.id} item>
            <Card>
              <Image
                style={{
                  backgroundImage: `url(${post.frontmatter.featuredimage})`,
                }}
              />
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
        ))}
      </Container>
    </Layout>
  )
}

export default Index
