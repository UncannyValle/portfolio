import React from "react"
import { bool, func } from "prop-types"
import styled from "styled-components"

//Styles
const StyledBurger = styled.button`
  top: 5%;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-right: 3rem;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1.5rem;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 4rem;
    height: 0.3rem;
    background: ${({ theme }) => theme.color.neon};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 2.5rem;
      height: 0.25rem;
    }
  }
  #one {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  #two {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  #three {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
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
