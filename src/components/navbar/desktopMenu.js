import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

//styles
const Button = styled(Link)`
  color: white;
  display: block;
  font-size: 1.5rem;
  font-family: Archivo;
  text-transform: uppercase;
  box-shadow: none;
  transition: all 200ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: var(--pink);
    padding: none;
  }

  @media (max-width: 768px) {
    width: 40%;
  }
`
const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  @media (max-width: 768px) {
    display: none;
  }
`
/////////////////////////

const DesktopMenu = () => (
  <Menu>
    <li id="projects-link">
      <Button activeClass="selected" to="projects" smooth={true} spy={true}>
        Projects
      </Button>
    </li>
    <li id="about-link">
      <Button activeClass="selected" to="about" smooth={true} spy={true}>
        About Me
      </Button>
    </li>
    <li>
      <Button activeClass="selected" to="contact" smooth={true} spy={true}>
        Contact{" "}
      </Button>
    </li>
  </Menu>
)

export default DesktopMenu
