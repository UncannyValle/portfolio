import { Link } from "gatsby"
import React, { useState, useRef, useLayoutEffect } from "react"
// import menuImage from "../images/menu.png"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100%;
  padding: 1.5rem 0 2rem 0;
  background-color: #FF584D;
  box-shadow: ${({ animate }) =>
    animate
      ? "1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
      : "none"};
  transition: all 200ms ease-in;
  nav {
    height: 100%;
  }
  ul {
    display: flex;
    justify-content: space-around;
    height: inherit;
    align-items: center;
  }
  a {
    transition: all 200ms ease-in;
    padding: 0.5rem 2rem 1rem 2rem;
    font-weight: 700;
    box-shadow: none;
    border-radius: 290486px;
    font-size: ${({ animate }) => (animate ? "1.5rem" : "2.5rem")};
    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
    &:active {
      text-decoration: underline;
    }
    @media (max-width: 720px) {
      font-size: ${({ animate }) => (animate ? "1rem" : "1.5rem")};
      padding: 0.25rem 0.75rem 0.125rem;
    }
  }
  @media (max-width: 520px) {
    padding: 1rem 0;
  }
`
const Title = styled(Link)`
  background-color: white;
  &:hover {
    background-color: #2352e8;
    color: white;
  }
`
const Button = styled(Link)`
  color: white;
  font-size: 1rem;
  background-color: #2352e8;
  &:hover {
    background-color: #26fff9;
    color: #2c26ff;
    border: none;
  }
`

const Header = () => {
  const [shadow, setShadow] = useState(false)
  const ourRef = useRef(null)

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top
    const headerPos = topPos(ourRef.current)

    const onScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > headerPos + 1) {
        setShadow(true)
      } else setShadow(false)
    }
    window.addEventListener("scroll", onScroll)
  }, [])

  return (
    <HeaderWrapper ref={ourRef} animate={shadow}>
      {/* <button onClick={toggleMenu} >
        <img src={menuImage} alt="hamburger"></img>
      </button> */}
      <nav>
        <ul>
          <li id="title">
            <Title to="/">The Uncanny Valle</Title>
          </li>
          <li>
            <Button to="#contact">Hit me up!</Button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}
export default Header
