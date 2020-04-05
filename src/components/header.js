import { Link } from "gatsby"
import React from "react"
// import menuImage from "../images/menu.png"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  position: fixed;
  z-index:5;
  top: 0;
  width: 100vw;
  background-color: white;
  box-shadow: 0 2.5px 2.5px 0;
  ul {
    display: flex;
    margin: 1rem 0;
    justify-content: space-evenly;
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
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about/">ABOUT</Link>
          </li>
          <li>
            <Link to="/projects/">PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact/">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}
export default Header
