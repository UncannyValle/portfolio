import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { useState } from "react"
import styled from "styled-components"
import Hamburger from "../components/hamburger"
import DesktopMenu from "../components/desktopMenu"
import MobileMenu from "../components/mobileMenu"

const HeaderWrapper = styled.header`
  position: relative;
  z-index: 5;
  top: 0;
  width: 100%;
  background-color: #303f9f;
  height: 10vh;
  box-shadow: 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 200ms ease-in;

  .selected {
    color: ${({ theme }) => theme.color.neon};
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    /* @media (max-width: 768px) {
      font-size: 2.7rem;
    }
    @media (max-width: 520px) {
      font-size: 1.7rem;
    } */
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
  color: white;
  font-size: 2.5rem;
  transition: all 0.2s ease-out;
  padding-left: 3rem;
  text-align: center;

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
          duration={0.75}
          to="/"
          activeClassName="selected"
        >
          The Uncanny Valle
        </Title>
        <DesktopMenu />
        <MobileMenu open={open} setOpen={setOpen} />
        <Hamburger open={open} setOpen={setOpen} />
      </nav>
    </HeaderWrapper>
  )
}
export default Header
