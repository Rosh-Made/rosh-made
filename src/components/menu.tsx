import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "gatsby-theme-material-ui"
import { Logo } from "./logo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
`

const LogoWrapper = styled.div`
  margin-bottom: 100px;
  @media (max-width: 960px) {
    display: none;
  }
`

const Menu: FC<{ close: () => void }> = ({ close }) => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Link onClick={() => close()} to="/?tag=Travel" color="inherit">
        Travel
      </Link>
      <Link onClick={() => close()} to="/?tag=Home" color="inherit">
        Home
      </Link>
      <Link onClick={() => close()} to="/?tag=LIFESTYLE" color="inherit">
        Lifestyle
      </Link>
      <Link onClick={() => close()} to="/?tag=IT" color="inherit">
        IT
      </Link>
      <Link onClick={() => close()} to="/" color="inherit">
        All Blogs
      </Link>
    </Container>
  )
}

export default Menu
