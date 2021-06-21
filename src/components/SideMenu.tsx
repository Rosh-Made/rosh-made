import React, { FC } from "react"
import styled from "styled-components"
import CloseIcon from "@material-ui/icons/Close"
import { IconButton, Link } from "gatsby-theme-material-ui"
import { Fade, Slide } from "@material-ui/core"

const SideMenuContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
`

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12rem;
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

interface SideMenuProps {
  visible: boolean
  close: () => void
}

const SideMenu: FC<SideMenuProps> = ({ visible, close }) => {
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
          <Link>DIY</Link>
          <Link>Lifestyle</Link>
          <Link>Plants</Link>
          <Link>Travel</Link>
          <Link>Home</Link>
        </MenuContainer>
        <AboutContainer>
          About Me {visible ? "visible" : "hiden"}
        </AboutContainer>
      </SideMenuContainer>
    </Slide>
  )
}

export default SideMenu
