import { Link } from "gatsby"
import React, { useState, useRef, useLayoutEffect } from "react"
// import menuImage from "../images/menu.png"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100%;
  padding: 1rem 0 1.5rem 0;
  background-color: ${({ animate }) => (animate ? "#303f9f" : "none")};
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
  #title {
    p {
      text-align: center;
      color: white;
    }
  }
  a {
    transition: all 200ms ease-in;
    padding: 0.25rem 1.5rem 0.5rem 1.5rem;
    font-weight: 700;
    box-shadow: none;
    border-radius: 290486px;
    font-size: ${({ animate }) => (animate ? "1.5rem" : "2.2rem")};
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    &:active {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      font-size: ${({ animate }) => (animate ? "1.2rem" : "1.7rem")};
      padding: 0.25rem 0.75rem 0.5rem 0.75rem;
    }
    @media (max-width: 520px) {
      padding: 0.1rem 0.5rem 0.2rem 0.5rem;
    }
  }
  @media (max-width: 520px) {
    padding: 1rem 0;
  }
`
const Title = styled(Link)`
  color: white;
  font-size: 5rem;
  text-shadow: 1px 1px #bdbdbd;
  &:hover {
    background-color: #7c4dff;
    color: white;
    text-shadow: none;
  }
`
const Button = styled.a`
  color: white;
  font-size: 1rem;
  background-color: #7c4dff;
  &:hover {
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
      <nav>
        <ul>
          <li id="title">
            <Title to="/">The Uncanny Valle</Title>
          </li>
          <li>
            <Button href="#contact">Hit me up!</Button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}
export default Header
