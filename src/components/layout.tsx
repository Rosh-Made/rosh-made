import React, { FC, useState } from "react"
import {
  AppBar,
  Backdrop,
  createMuiTheme,
  CssBaseline,
  IconButton,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import SlideInMenu from "./slide-in-menu"
import CloseIcon from "@material-ui/icons/Close"
import SocialIcons from "./social-icons"
import { Logo } from "./logo"
import { FirebaseAppProvider } from "reactfire"

const firebaseConfig = {
  apiKey: "AIzaSyAx2XvriVPrZ_H1kBk9JBGILTrrv7UoNz4",
  authDomain: "roshmade-blog.firebaseapp.com",
  projectId: "roshmade-blog",
  storageBucket: "roshmade-blog.appspot.com",
  messagingSenderId: "431525069130",
  appId: "1:431525069130:web:00aa1ba10a3419ced4c1b3",
  measurementId: "G-DRN4BB93PS",
}

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
  z-index: 33;
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
  display: none;
  @media (min-width: 960px) {
    min-height: 8rem;
    display: block;
  }
`

const Container = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 600px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
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
  border-top: solid 1px #c1c1c1;
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
  //text-transform: uppercase;
  align-items: center;
  gap: 2rem;
  font-family: raleway, sans-serif;
  color: inherit;
  margin: 2rem;
  a,
  a:hover {
    color: #bdc3aa;
    text-underline: none;
    font-weight: 600;
  }
`

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: 34,
    backgroundColor: "transparent",
  },
}))

const Layout: FC = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const classes = useStyles()

  // @ts-ignore
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
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
            <Backdrop
              className={classes.backdrop}
              open={visible}
              onClick={() => setVisible(false)}
            >
              <SlideInMenu visible={visible} close={() => setVisible(false)} />
            </Backdrop>
          </div>
          <Logo />
          <div>
            <SearchIcon
              style={{ visibility: "hidden" }}
              className="show-on-desktop"
              fontSize="large"
            />
          </div>
        </Header>
        <LogoHeader />
        <Container>{children}</Container>
        <Footer>
          <FooterLinks>
            © Roshmade 2021
            {/*<Link to="/about">About</Link>*/}
            {/*<Link to="/contact">Contact</Link>*/}
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
    </FirebaseAppProvider>
  )
}

export default Layout
