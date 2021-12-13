import React, { FC } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container } from "@material-ui/core"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
import { Comments } from "../components/Comments"

const Date = styled.div`
  margin-top: 1.5rem;
  font-family: raleway, sans-serif;
  color: #8b9a72;
`

const Title = styled.div`
  margin-top: 2rem;
  font-size: 1.3rem;
  font-family: raleway, sans-serif;
  font-weight: 300;
  font-style: normal;

  @media (min-width: 600px) {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }
`

const BlogHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  margin-top: 3rem;
  font-family: freight-sans-pro, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  text-align: justify;

  a {
    color: #3c87e8;
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    display: block;
    overflow-x: auto;
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #e5e3e3;
  }
`

const BlogPost: FC<any> = ({ data }) => {
  const post = data.markdownRemark
  const featuredimage = `https://www.roshmade.com${getSrc(
    post.frontmatter.featuredimage
  )}`
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Roshmade - ${post.frontmatter.title}`}</title>
        <link
          rel="canonical"
          href={`https://www.roshmade.com/${post.fields.slug}`}
        />

        <meta
          property="og:url"
          content={`https://www.roshmade.com/${post.fields.slug}`}
        />
        <meta
          property="og:title"
          content={`Roshmade Blog - ${post.frontmatter.title}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={featuredimage} />
      </Helmet>

      <Container maxWidth="md">
        <BlogHeaderContainer>
          <Date>{post.frontmatter.date}</Date>
          <Title>{post.frontmatter.title}</Title>
        </BlogHeaderContainer>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <Comments blogUrl={post.fields.slug} />
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
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              width: 400
              aspectRatio: 1
              transformOptions: { cropFocus: CENTER }
              quality: 100
            )
          }
        }
        title
        date(formatString: "LL")
      }
      excerpt
      id
    }
  }
`

export default BlogPost
