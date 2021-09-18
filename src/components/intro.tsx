import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import SocialIcons from "./social-icons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

const Title = styled.h3`
 margin-bottom: 0;
`

const CircleImage = styled.div`
  width: 12rem;
  height: 12rem;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  
  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "IMG_4751.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            aspectRatio: 1
            transformOptions: {cropFocus: CENTER}
            placeholder: BLURRED
          )
        }
      }
    }
  `)

  const profilePic = getImage(data.profilePic);

  return (
    <Container>
      <CircleImage>
        {profilePic && <GatsbyImage alt="image" image={profilePic} />}
      </CircleImage>
      <Title>Welcome to Roshmade</Title>
      <Pitch>
      <p>Hello there,</p>
      I'm Roshani, 31, fulltime IT professional, based in Auckland, NZ. 
      Roshmade is my journal blog where I share my passion for the planet, home design, travel, and creative + mindful living.
      Enjoy your time here :)
      <p>Rosh x</p>
      </Pitch>
      <SocialIcons />
    </Container>
  )
}

export default Intro
