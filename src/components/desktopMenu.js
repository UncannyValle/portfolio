import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//styles
const Button = styled(Link)`
  color: white;
  display: block;
  font-size: 1.5rem;
  box-shadow: none;
  transition: all 200ms ease-in-out;
  -webkit-transition: all 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.uncannyCyan};
    /* font-size: 2rem; */
    padding: none;
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 40%;
  }
`
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin-right: 3rem;
  @media (max-width: 768px) {
    display: none;
  }
`
/////////////////////////

const DesktopMenu = () => (
  <Menu>
    <li id="projects-link">
      <Button
        to="/project-page"
        activeClassName="selected"
      >
        Projects
      </Button>
    </li>
    <li id="about-link">
      <Button
        paintDrip
        hex="#7c4dff"
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
        hex="#7c4dff"
        duration={0.75}
        to="/contact-page"
        activeClassName="selected"
      >
        Hit me up!
      </Button>
    </li>
  </Menu>
)

export default DesktopMenu
