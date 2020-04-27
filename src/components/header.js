import { Link } from "gatsby"
import React, { useState, useRef, useLayoutEffect } from "react"
// import menuImage from "../images/menu.png"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100%;
  height: 15vh;
  background-color: white;
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
    height: 100%;
    align-items: center;
  }
  a {
    transition: 0.2s;
    padding: 1rem 1.5rem;
    font-weight: 700;
    box-shadow: none;
    border-radius: 290486px;
    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
    &:active {
      text-decoration: underline;
    }
  }

  @media (max-width: 520px) {
    #title {
      display: none;
    }
  }
`
const Title = styled(Link)`
  background-color: white;
`
const Button = styled(Link)`
  background-color: #349aff;
  color: white;
`

const Header = () => {
  const [shadow, setShadow] = useState(false)
  const ourRef = useRef(null)

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top
    const headerPos = topPos(ourRef.current)

    const onScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > headerPos) {
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
            <Button to="/blog/test">Hit me up!</Button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}
export default Header
