import React, { FC } from "react"
import styled from "styled-components"
import { Grid, Slide, useMediaQuery, useTheme } from "@material-ui/core"
import Menu from "./menu"
import Intro from "./intro"
import { IconButton } from "gatsby-theme-material-ui"
import CloseIcon from "@material-ui/icons/Close"

const FixedContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-y: auto;
  z-index: 35;

  @media (min-width: 960px) {
    width: 60rem;
  }

  .hide-on-desktop {
    @media (min-width: 960px) {
      display: none;
    }
  }

  .show-on-desktop {
    @media (max-width: 960px) {
      display: none;
    }
  }
`

const Container = styled(Grid)`
  font-family: raleway, sans-serif;

  .column {
    @media (min-width: 960px) {
      min-height: 100%;
      border-right: solid 1px #f0f0f0;
      width: 960px;
    }

    @media (max-width: 960px) {
      border-bottom: solid 1px #f0f0f0;
    }
  }

  @media (min-width: 960px) {
    height: 100%;
  }
`

const Column = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CloseButton = styled.div`
  position: absolute;
  top: 2.1rem;
  left: 4rem;
  color: #5f5f5f;
`

const MobileBottomMargin = styled.div`
  height: 4rem;
`

interface SlideInMenuProps {
  visible: boolean
  close: () => void
}

const SlideInMenu: FC<SlideInMenuProps> = ({ visible, close }) => {
  const theme = useTheme()
  const mdAndUp = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <Slide
      direction={mdAndUp ? "right" : "up"}
      in={visible}
      mountOnEnter
      unmountOnExit
      style={{ transformOrigin: "0 0 0" }}
      {...(visible ? { timeout: 500 } : {})}
    >
      <FixedContainer>
        <CloseButton className="show-on-desktop">
          <IconButton onClick={() => close()} aria-label="menu">
            <CloseIcon fontSize="large" />
          </IconButton>
        </CloseButton>
        <Container container>
          <Column xs={12} md={6} className={"column"} item>
            <Menu close={close} />
          </Column>
          <Column xs={12} md={6} className={"column"} item>
            <Intro />
          </Column>
        </Container>
        <MobileBottomMargin className="hide-on-desktop" />
      </FixedContainer>
    </Slide>
  )
}

export default SlideInMenu
