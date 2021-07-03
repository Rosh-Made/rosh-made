import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import SocialIcons from "./social-icons"
import BackgroundImage from "gatsby-background-image"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
`

const Pitch = styled.div`
  width: 16rem;
  text-align: center;
`

const ProfileImage = styled.div`
  .deco {
    width: 12rem;
    height: 12rem;
    -webkit-border-radius: 12rem;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 12rem;
    -moz-background-clip: padding;
    background-clip: padding-box;
    margin: 7px 0 0 5px;
    float: left;
    background-size: cover;
    background-position: center center;

    &::before,
    &::after {
      border-radius: 50%;
    }
  }
`

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.placeholderImage.childImageSharp.fluid

  return (
    <Container>
      <ProfileImage>
        <BackgroundImage
          className="deco"
          Tag="div"
          fluid={imageData}
          backgroundColor="#ffffff"
        />
      </ProfileImage>
      <h3>Welcome to Roshmade</h3>
      <Pitch>
      <p>Hello there,</p>
      I'm Roshani, is a 30 something, based in Auckland, NZ. 
      Roshmade is my blog/Journal where I share my passion for the planet, home design, travel, and creative + mindful living.
      Enjoy your time here :)
      <p>Rosh x</p>
      </Pitch>
      <SocialIcons />
    </Container>
  )
}

export default Intro
