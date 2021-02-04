// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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

  .selected {
    background-color: rebeccapurple;
    padding: 1rem 2rem;
    font-size: 2.5rem;
  }
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
    transition: all 200ms ease-in-out;
    padding: 0.5rem 1.5rem;
    box-shadow: none;
    border-radius: 35px;
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
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
const Title = styled(AniLink)`
  color: white;
  text-shadow: 1px 1px #bdbdbd;
  font-size: ${({ animate }) => (animate ? "1.5rem" : "2.5rem")};

  &:hover {
    color: white;
    text-shadow: none;
  }
`
const Button = styled(AniLink)`
  color: white;
  padding: 2rem;
  background-color: #7c4dff;
  font-size: ${({ animate }) => (animate ? "1.5rem" : "1.8rem")};

  &:hover {
    border: none;
    cursor: pointer;
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
            <Title
              paintDrip
              color="rebeccapurple"
              duration={0.75}
              to="/"
              activeClassName="selected"
            >
              The Uncanny Valle
            </Title>
          </li>
          <li id="projects-link">
            <Button
              paintDrip
              color="rebeccapurple"
              duration={0.75}
              to="/project-page"
              activeClassName="selected"
            >
              Projects
            </Button>
          </li>
          <li id="about-link">
            <Button
              paintDrip
              color="rebeccapurple"
              duration={0.75}
              to="/blog"
              activeClassName="selected"
            >
              About Me
            </Button>
          </li>
          <li>
            <Button
              paintDrip
              color="rebeccapurple"
              duration={0.75}
              to="/contact-page"
              activeClassName="selected"
            >
              Hit me up!
            </Button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}
export default Header
