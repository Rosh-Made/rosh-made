import React, { FC } from "react"
import styled from "styled-components"
import CloseIcon from "@material-ui/icons/Close"
import { IconButton, Link } from "gatsby-theme-material-ui"
import { Fade, Slide } from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import { graphql, useStaticQuery } from "gatsby"

const SideMenuContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "raleway";
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12rem;
  height: 100vh;
  gap: 2rem;
  border-right: solid 1px #f0f0f0;
  color: black;
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
`

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  height: 100vh;
  gap: 2rem;
  border-right: solid 1px #f0f0f0;
`

const CloseButton = styled.div`
  position: absolute;
  top: 2.1rem;
  left: 4rem;
  color: #5f5f5f;
`

const SocialIconsContainer = styled.div`
  color: #000;
  display: flex;
  gap: 0.5rem;
`

const Intro = styled.div`
  width: 16rem;
  text-align: center;
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

interface SideMenuProps {
  visible: boolean
  close: () => void
}

const SideMenu: FC<SideMenuProps> = ({ visible, close }) => {
  const data = useStaticQuery(graphql`
    query ProfilePicQuery {
      profile: file(base: { eq: "profile.jpg" }) {
        publicURL
      }
    }
  `)

  return (
    <Slide
      direction="right"
      in={visible}
      mountOnEnter
      unmountOnExit
      style={{ transformOrigin: "0 0 0" }}
      {...(visible ? { timeout: 500 } : {})}
    >
      <SideMenuContainer>
        <CloseButton>
          <Fade in={visible}>
            <IconButton onClick={() => close()} aria-label="menu">
              <CloseIcon fontSize="large" />
            </IconButton>
          </Fade>
        </CloseButton>
        <MenuContainer>
          <Link color="inherit">DIY</Link>
          <Link color="inherit">Lifestyle</Link>
          <Link color="inherit">Plants</Link>
          <Link color="inherit">Travel</Link>
          <Link color="inherit">Home</Link>
        </MenuContainer>
        <AboutContainer>
          <div>
            <ProfilePic
              style={{ backgroundImage: `url(${data.profile.publicURL})` }}
            />
          </div>
          <h3>Welcome to RoshMade.</h3>
          <Intro>
            The Tiny Canal Cottage® is a 1920's Craftsman-style house by the
            Venice Beach Canals in Southern California. After residing there for
            10 years, Sustainable Small Space Living Consultant Whitney Leigh
            Morris and her family (including her husband, 2 children, and 2
            rescue pups) recently relocated.
          </Intro>
          <SocialIconsContainer>
            <InstagramIcon />
            <LinkedInIcon />
            <EmailIcon />
          </SocialIconsContainer>
        </AboutContainer>
      </SideMenuContainer>
    </Slide>
  )
}

export default SideMenu
