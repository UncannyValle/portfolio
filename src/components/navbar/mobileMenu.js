import React from "react"
import styled from "styled-components"
import { bool } from "prop-types"
import { Link } from "react-scroll"

const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: black;
  height: 90vh;
  text-align: center;
  position: absolute;
  top: 10vh;
  right: 0px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (!open ? "translateX(100%)" : "translateX(0)")};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    display: flex;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 3rem;
  }
`
const Links = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  height: 125px;
  width: 400px;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.colors.uncannyCyan};
  text-decoration: none;
  transition: color 0.3s linear;
  border-radius: 1rem;
  border: solid 3px var(--pink);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.2rem;
    text-align: center;
    height: 100px;
    width: 300px;
  }
`

const MobileMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Links
        to="projects"
        smooth={true}
        spy={true}
        onClick={() => setOpen(!open)}
      >
        <span role="img" aria-label="projects">
          &#128187;
        </span>
        Projects
      </Links>
      <Links
        to="about"
        smooth={true}
        spy={true}
        onClick={() => setOpen(!open)}
      >
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About me
      </Links>
      <Links
        to="contact"
        smooth={true}
        spy={true}
        onClick={() => setOpen(!open)}
      >
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </Links>
    </StyledMenu>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}
export default MobileMenu
