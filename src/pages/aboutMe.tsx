import React, { FC } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Container } from "@material-ui/core"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

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
`

const AboutMe: FC<{ location: any }> = () => {
    const data = useStaticQuery(graphql`
    query {
      roshPic: file(relativePath: { eq: "IMG_4726.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 920
            placeholder: BLURRED
          )
        }
      }
    }
  `)

  const roshPic = getImage(data.roshPic);
    return (<Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Roshmade - Personal Blog</title>
            <link rel="canonical" href="https://www.roshmade.com" />

            <meta property="og:title" content="Roshmade - Personal Blog" />
            <meta
                property="og:description"
                content="Roshmade is my journal blog where I share my passion for the planet, home design, travel, and creative + mindful living."
            />
            <meta
                property="og:image"
                content="https://www.roshmade.com/static/97a1978370520a4559a3f54fd1ba2eb0/a6d46/IMG_4751.webp"
            />
        </Helmet>
        <Container maxWidth="md">
            <p>Welcome to Roshmade</p>
            <p>What is Roshmade? My life in a blog? Or is it more to that?</p>
            <p>
                One of the many reasons I started this blog is to bring awareness of the ongoing climate issues and document my journey to mindful living while enjoying life.
                I want to use this platform to promote sustainable ways of living, share simple but practical solutions, and be a 
                place to inspire others (including myself) to rethink and reduce their impact on a dying planet.
            </p>
            <p>While that’s on a serious note, I also want to use this space to celebrate creativity and share some amazing and fun content in home design, DIYs projects, home gardening, spontaneous travel guides, and many more.</p>
            <p> 
                I’m a big admirer of knowledge sharing, I want to make this space to share ideas, knowledge, and build space to inspire and to be inspired. Being able to inspire and encourage someone through writing is a wholesome feeling, and when 
                people respond to you in positive ways it makes it even better and I feel like I want to do more.
            </p>
            <p>Watch out for this space!</p>
            <p>Rosh x</p>
        </Container>
    </Layout>)

}

export default AboutMe;