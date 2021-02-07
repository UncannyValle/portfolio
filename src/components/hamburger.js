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

  &:focus {
    outline: none;
  }

  div {
    width: 4rem;
    height: 0.5rem;
    background: ${({ theme }) => theme.color.neon};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Hamburger
