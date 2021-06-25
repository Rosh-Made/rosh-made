import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import SocialIcons from "./social-icons"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
`

const ProfilePic = styled.div`
  width: 12rem;
  height: 12rem;
  -webkit-border-radius: 12rem;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 12rem;
  -moz-background-clip: padding;
  border-radius: 50%;
  background-clip: padding-box;
  margin: 7px 0 0 5px;
  float: left;
  background-size: cover;
  background-position: center center;
`

const Pitch = styled.div`
  width: 16rem;
  text-align: center;
`

const Intro = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      profile: file(base: { eq: "profile.jpg" }) {
        publicURL
      }
    }
  `)

  return (
    <Container>
      <div>
        <ProfilePic
          style={{ backgroundImage: `url(${data.profile.publicURL})` }}
        />
      </div>
      <h3>Welcome to RoshMade.</h3>
      <Pitch>
        The Tiny Canal Cottage® is a 1920's Craftsman-style house by the Venice
        Beach Canals in Southern California. After residing there for 10 years,
        Sustainable Small Space Living Consultant Whitney Leigh Morris and her
        family (including her husband, 2 children, and 2 rescue pups) recently
        relocated.
      </Pitch>
      <SocialIcons />
    </Container>
  )
}

export default Intro
