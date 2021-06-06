import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"

const Wrapper = styled(animated.h1)`
  margin: 1rem auto;
  text-align: center;
  display: block;
  width: 70%;
  font-weight: 800;
  overflow: hidden;
  position: relative;
  z-index: -30;

  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 80%;
    font-size: 3rem;
  }
  @media (max-width: 520px) {
    font-size: 2rem;
  }
`
const Title = ({ children }) => {
  const rise = useSpring({
    opacity: 1,
    top: "0rem",
    config: config.molasses,
    from: {
      opacity: 0,
      top: "5rem",
    },
  })
  return <Wrapper style={rise}>{children}</Wrapper>
}
export default Title
