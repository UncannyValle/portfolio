import React from "react"
import styled from "styled-components"
import { bool } from "prop-types"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.color.mainPurple};
  height: 90vh;
  text-align: center;
  padding: 2rem 10rem;
  position: absolute;
  top: 10vh;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (!open ? "translateX(100%)" : "translateX(0)")};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    height: 7rem;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.color.neon};
    text-decoration: none;
    transition: color 0.3s linear;
    border-radius: 15px;
    border: solid 5px ${({ theme }) => theme.color.neon};
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`

const MobileMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Projects
      </a>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About me
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </StyledMenu>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}
export default MobileMenu
