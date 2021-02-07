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
    font-size: 2.5rem;
    color: ${({ theme }) => theme.color.neon};
    @media (max-width: 768px) {
      font-size: 3rem;
    }
    @media (max-width: 520px) {
      font-size: 1.7rem;
    }
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
  text-align: left;
  transition: all 0.2s ease-out;
  width: 30%;
  margin-left: 3rem;

  @media (max-width: 768px) {
    width: 70%;
    font-size: 3.5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 1.5rem;
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
