import React, { FC, useState } from "react"
import {
  AppBar,
  createMuiTheme,
  CssBaseline,
  IconButton,
  MuiThemeProvider,
} from "@material-ui/core"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import { navigate } from "gatsby"
import SlideInMenu from "./slide-in-menu"
import CloseIcon from "@material-ui/icons/Close"
import SocialIcons from "./social-icons"
import { Link } from "gatsby-theme-material-ui"
// @ts-ignore
import Logo from "/src/svg/logo.svg"

const Header = styled(AppBar)`
  min-height: 8rem;
  padding-left: 4rem;
  padding-right: 4rem;
  box-shadow: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #5f5f5f;
  background-color: #fff;
  z-index: 34;
  position: relative;

  @media (min-width: 960px) {
    position: fixed;
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

const LogoHeader = styled.div`
  min-height: 8rem;
  @media (max-width: 960px) {
    display: none;
  }
`

const Container = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
})

const BottomBar = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background-color: #fff;
  border-top: solid 1px #f0f0f0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 36;

  @media (min-width: 960px) {
    display: none;
  }
`

const Footer = styled.div`
  position: relative;
  border-top: solid 1px #bdc3aa;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  padding-top: 2rem;
  padding-bottom: 8rem;

  @media (max-width: 60rem) {
    padding-bottom: 2rem;
    margin-bottom: 4rem;
    margin-top: 4rem;
  }
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  align-items: center;
  gap: 2rem;
  font-family: raleway, sans-serif;
  color: inherit;
  margin-top: 2rem;
  margin-bottom: 2rem;
  a,
  a:hover {
    color: #bdc3aa;
    text-underline: none;
    font-weight: 600;
  }
`

const LogoImage = styled.div`
  svg {
    max-height: 5.5rem;
    margin-top: 0.25rem;
  }
`

const Layout: FC = ({ children }) => {
  const [visible, setVisible] = useState(false)

  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
      <Header>
        <div>
          <IconButton
            className="show-on-desktop"
            onClick={() => setVisible(true)}
            aria-label="menu"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <SlideInMenu visible={visible} close={() => setVisible(false)} />
        </div>
        <LogoImage onClick={() => navigate("/")}>
          <Logo />
        </LogoImage>
        <div />
      </Header>
      <LogoHeader />
      <Container>{children}</Container>
      <Footer>
        <FooterLinks>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </FooterLinks>
        <SocialIcons />
      </Footer>
      <BottomBar>
        <div>
          <IconButton onClick={() => setVisible(!visible)} aria-label="menu">
            {visible ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <div />
      </BottomBar>
    </MuiThemeProvider>
  )
}

export default Layout
