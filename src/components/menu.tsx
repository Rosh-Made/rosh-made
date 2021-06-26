import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "gatsby-theme-material-ui"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
`

const Menu: FC = () => {
  return (
    <Container>
      <Link color="inherit">DIY</Link>
      <Link color="inherit">Lifestyle</Link>
      <Link color="inherit">Plants</Link>
      <Link color="inherit">Travel</Link>
      <Link color="inherit">Home</Link>
    </Container>
  )
}

export default Menu