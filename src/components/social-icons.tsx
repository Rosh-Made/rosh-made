import React, { FC } from "react"
import styled from "styled-components"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import YouTubeIcon from "@material-ui/icons/YouTube"
import { IconButton } from "@material-ui/core"

const Container = styled.div`
  color: #000;
  display: flex;

  .icon {
    color: #000000;
  }

  a {
    padding: 8px;
    margin: 0;
  }
`

const SocialIcons: FC = () => {
  return (
    <Container>
      <IconButton
        target="_blank"
        href="https://www.instagram.com/maryannroshani"
      >
        <InstagramIcon className="icon" />
      </IconButton>
      <IconButton
        target="_blank"
        href="https://www.youtube.com/channel/UC_wdUjHLaJ3Z-nGCv9wEjyA"
      >
        <YouTubeIcon className="icon" />
      </IconButton>
      <IconButton
        target="_blank"
        href="https://www.linkedin.com/in/maryannrosh/"
      >
        <LinkedInIcon className="icon" />
      </IconButton>
    </Container>
  )
}

export default SocialIcons
