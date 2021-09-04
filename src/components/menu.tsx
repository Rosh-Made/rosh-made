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

const Menu: FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Link color="inherit">About</Link>
      <Link color="inherit">Travel</Link>
      <Link color="inherit">Home + Reno</Link>
      <Link color="inherit">Lifestyle</Link>
      <Link color="inherit">DIY</Link>
    </Container>
  )
}

export default Menu
