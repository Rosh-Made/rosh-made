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
import SearchIcon from "@material-ui/icons/Search"
import SideMenu from "./SideMenu"
import { graphql, useStaticQuery } from "gatsby"

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
`

const LogoHeader = styled.div`
  min-height: 8rem;
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

const Layout: FC = ({ children }) => {
  const [visible, setVisible] = useState(false)

  const data = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(base: { eq: "logo.png" }) {
        publicURL
      }
    }
  `)

  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
      <Header position="fixed">
        <div>
          <IconButton onClick={() => setVisible(true)} aria-label="menu">
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
        <div>
          <img
            style={{ height: "4.5rem", marginTop: 4 }}
            src={data.logo.publicURL}
            alt="logo"
          />
        </div>
        <div>
          <SearchIcon fontSize="large" />
        </div>
        <SideMenu visible={visible} close={() => setVisible(false)} />
      </Header>
      <LogoHeader />
      <Container>{children}</Container>
    </MuiThemeProvider>
  )
}

export default Layout
