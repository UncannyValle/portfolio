import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { useState } from "react"
import styled from "styled-components"
import Hamburger from "../components/hamburger"
import DesktopMenu from "../components/desktopMenu"
import MobileMenu from "../components/mobileMenu"

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100vw;
  background-color: #303f9f;
  height: 10vh;
  box-shadow: 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 200ms ease-in;

  .selected {
    color: ${({ theme }) => theme.colors.uncannyCyan};
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
  .navbar {
    height: 100%;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 520px) {
    padding: 1rem 0;
  }
`
const Title = styled(AniLink)`
  font-size: 2.5rem;
  transition: all 0.2s ease-out;
  padding-left: 3rem;
  text-align: center;
  font-family: ${({ theme }) => theme.font.display};
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: 2rem;
    font-size: 2rem;
  }
`

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <HeaderWrapper>
      <nav className="navbar">
        <Title
          paintDrip
          hex="#7c4dff"
          duration={0.5}
          to="/"
          activeClassName="selected"
        >
          Julian Valle
        </Title>
        <DesktopMenu />
        <MobileMenu open={open} setOpen={setOpen} />
        <Hamburger open={open} setOpen={setOpen} />
      </nav>
    </HeaderWrapper>
  )
}
export default Header
