import React, { FC } from "react"
import styled from "styled-components"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import YoutubeIcon from "@material-ui/icons/Youtube"
import { IconButton } from "@material-ui/core"

const Container = styled.div`
  color: #000;
  display: flex;
  gap: 0.5rem;
`

const SocialIcons: FC = () => {
  return (
    <Container>
      <IconButton
        target="_blank"
        href="https://www.instagram.com/maryannroshani"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        target="_blank"
        href="https://www.youtube.com/channel/UC_wdUjHLaJ3Z-nGCv9wEjyA"
      >
        <YoutubeIcon />
      </IconButton>
      <IconButton
        target="_blank"
        href="https://www.linkedin.com/in/maryannrosh/"
      >
        <LinkedInIcon />
      </IconButton>
    </Container>
  )
}

export default SocialIcons
