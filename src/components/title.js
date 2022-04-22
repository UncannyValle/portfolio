import React, { useRef } from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import useIntersectionObserver from "../hooks/useIntersectionObserver"

const Wrapper = styled(animated.h1)`
  margin: 0 auto;
  text-align: center;
  display: block;
  width: 70%;
  font-weight: 800;
  overflow: hidden;
  position: relative;
  z-index: -30;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 80%;
    font-size: 3rem;
  }
  @media (max-width: 512px) {
    font-size: 1.5rem;
    padding: 0;
  }
`
const Title = ({ children }) => {
  const triggerRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  })

  const rise = useSpring({
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      top: dataRef?.isIntersecting ? "0rem" : "5rem",
    },
    config: config.molasses,
    from: {
      opacity: 0,
      top: "5rem",
    },
  })
  return (
    <>
      <Wrapper style={rise} ref={triggerRef}>
        {children}
      </Wrapper>
    </>
  )
}
export default Title
