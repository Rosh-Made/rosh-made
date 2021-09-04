import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"

// @ts-ignore
import LogoSvg from "/src/svg/logo.svg"
import { navigate } from "gatsby"

const LogoImage = styled.div`
  svg {
    max-height: 4.2rem;
    margin-top: 0.25rem;
  }

  cursor: pointer;
`

const isFontsReady = () => {
  return (
    // @ts-ignore
    document.fonts.check("300px mencken-std-head-narrow") &&
    // @ts-ignore
    document.fonts.check("58.333px rufina-alt-01")
  )
}

export const Logo: FC = () => {
  const [fontsReady, setFontsReady] = useState(false)

  const resolveFont = () => {
    if (isFontsReady()) {
      setFontsReady(true)
    } else {
      setTimeout(() => resolveFont())
    }
  }

  useEffect(() => {
    resolveFont()
  }, [])

  return (
    <LogoImage onClick={() => navigate("/")}>
      {fontsReady && <LogoSvg />}
    </LogoImage>
  )
}
