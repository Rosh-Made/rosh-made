import React, { FC } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container } from "@material-ui/core"
import styled from "styled-components"

const Date = styled.div`
  margin-top: 1.5rem;
  font-family: raleway, sans-serif;
  color: #8b9a72;
`

const Title = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2.8rem;
  font-family: raleway, sans-serif;
  font-weight: 300;
  font-style: normal;
`

const Content = styled.div`
  margin-top: 3rem;
  font-family: freight-sans-pro, sans-serif;
  font-style: normal;
  font-weight: 300;
`

const BlogHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BlogPost: FC<any> = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container maxWidth="md">
        <BlogHeaderContainer>
          <Date>{post.frontmatter.date}</Date>
          <Title>{post.frontmatter.title}</Title>
        </BlogHeaderContainer>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
`

export default BlogPost
