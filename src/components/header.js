import { Link } from "gatsby"
import React from "react"
// import menuImage from "../images/menu.png"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100vw;
  background-color: #95e6d594;
  ul {
    display: flex;
    margin: 1rem 0;
    justify-content: space-evenly;
  }
  a {
    color: #0d0d0d;
    font-weight: 700;
  }
  @media (max-width: 520px) {
    #title {
      display: none;
    }
  }
`
const Header = () => {
  return (
    <HeaderWrapper>
      {/* <button onClick={toggleMenu} >
        <img src={menuImage} alt="hamburger"></img>
      </button> */}
      <nav>
        <ul>
          <li id="title">
            <Link to="/">The Uncanny Valle</Link>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}
export default Header
