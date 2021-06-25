import React, { FC } from "react"
import styled from "styled-components"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import PinterestIcon from "@material-ui/icons/Pinterest"

const Container = styled.div`
  color: #000;
  display: flex;
  gap: 0.5rem;
`

const SocialIcons: FC = () => {
  return (
    <Container>
      <InstagramIcon />
      <PinterestIcon />
      <LinkedInIcon />
    </Container>
  )
}

export default SocialIcons
