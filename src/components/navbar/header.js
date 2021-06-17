import React, { useState } from "react"
import styled from "styled-components"
import Hamburger from "./hamburger"
import DesktopMenu from "./desktopMenu"
import MobileMenu from "./mobileMenu"
import { Link } from "gatsby"

const HeaderWrapper = styled.header`
  position: fixed;

  z-index: 5;
  top: 0;
  width: 100vw;
  background-color: var(--purple);
  height: 10vh;
  box-shadow: 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 200ms ease-in;

  .selected {
    color: cyan;
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
  .navbar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1366px;
    padding: 0 2rem;
    margin: 0 auto;
  }

  @media (max-width: 520px) {
    padding: 1rem 0;
  }
`
const Title = styled(Link)`
  font-size: 2.5rem;
  transition: all 0.2s ease-out;
  text-align: left;
  font-family: ${({ theme }) => theme.font.display};
  color: cyan;
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
        <Title to="/" activeClassName="selected">
          JV
        </Title>
        <DesktopMenu />
        <MobileMenu open={open} setOpen={setOpen} />
        <Hamburger open={open} setOpen={setOpen} />
      </nav>
    </HeaderWrapper>
  )
}
export default Header
