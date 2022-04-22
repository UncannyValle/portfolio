import React from "react"
import { bool, func } from "prop-types"
import styled from "styled-components"

//Styles
const StyledBurger = styled.button`
  top: 5%;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 25px;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 50px;
    text-align: center;
    height: 5px;
    background: cyan;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    position: relative;
    transform-origin: 1px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 25px;
      height: 2px;
    }
  }
  #one {
    transform: ${({ open }) => (open ? "rotate(40deg)" : "rotate(0)")};
    background-color: ${({ open }) => (open ? "var(--pink)" : "cyan")};
  }

  #two {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(30px)" : "translateX(0)")};
  }

  #three {
    transform: ${({ open }) => (open ? "rotate(-40deg)" : "rotate(0)")};
  }
`

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div id="one" />
      <div id="two" />
      <div id="three" />
    </StyledBurger>
  )
}

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Hamburger
