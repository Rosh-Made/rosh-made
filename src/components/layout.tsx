import React, { FC, useState } from "react"
import { AppBar, Container, IconButton } from "@material-ui/core"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import SideMenu from "./SideMenu"

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

const Layout: FC = ({ children }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Header position="fixed">
        <div>
          <IconButton onClick={() => setVisible(true)} aria-label="menu">
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
        <div>Rosh Made</div>
        <div>
          <SearchIcon fontSize="large" />
        </div>
        <SideMenu visible={visible} close={() => setVisible(false)} />
      </Header>
    </>
  )
}

export default Layout
