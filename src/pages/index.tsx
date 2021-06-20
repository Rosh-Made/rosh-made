import React, { FC } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const HelloWorld = styled.div`
  color: red;
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
    }
  `)

  return (
    <Layout>
      <HelloWorld>Wellcome to {data.site.siteMetadata.title}</HelloWorld>
      <img alt="Cute dog" src={data.image.publicURL} />
    </Layout>
  )
}

export default Index
