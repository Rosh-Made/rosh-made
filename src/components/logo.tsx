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

export const Logo: FC = () => {

  return (
    <LogoImage onClick={() => navigate("/")}>
      <LogoSvg />
    </LogoImage>
  )
}
