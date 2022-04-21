import React from "react"
import styled from "styled-components"

//styles
const Button = styled.a`
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
      <Button href="#projects" activeClassName="selected">
        Projects
      </Button>
    </li>
    <li id="about-link">
      <Button href="#about" activeClassName="selected">
        About Me
      </Button>
    </li>
    <li>
      <Button href="#contact" activeClassName="selected">
        Contact{" "}
      </Button>
    </li>
  </Menu>
)

export default DesktopMenu
