import { animated, useSpring, config } from "@react-spring/web"
import React, { useRef } from "react"
import styled from "styled-components"
import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare"
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal"
import useIntersectionObserver from "../hooks/useIntersectionObserver"

const Skills = (props) => {
  const triggerRef = useRef()
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  })

  const animateBorder = useSpring({
    delay: 300,
    config: config.molasses,
    from: {
      width: "0%",
    },
    to: {
      width: dataRef?.isIntersecting ? "100%" : "0%",
    },
  })

  return (
    <Wrapper style={props.style}>
      <div className="title">
        <h3>{props.title}</h3>
        <animated.div
          className="line"
          style={animateBorder}
          ref={triggerRef}
        ></animated.div>
      </div>
      <a
        className="img-wrapper"
        href={props.site}
        target="_blank"
        rel="noreferrer"
      >
        {props.image}
      </a>
      <p>{props.text}</p>
      <p>{props.tech}</p>
      <Buttons>
        {props.gitHub ? (
          <Button href={props.gitHub} target="_blank" rel="noreferrer">
            <GithubSquare className="icon" />
          </Button>
        ) : null}
        <Button href={props.site} target="_blank" rel="noreferrer">
          <LinkExternal className="icon" />
        </Button>
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled(animated.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  .title {
    margin-bottom: 2rem;
    h3 {
      font-size: 1.7rem;
      @media (max-width: 512px) {
        font-size: 1.3rem;
      }
    }
  }

  .line {
    height: 5px;
    background-color: var(--pink);
    margin: 0 auto;
  }

  p,
  .site-link {
    font-size: 1.2rem;
    display: inline-block;
    text-align: center;
  }
  .site-link {
    color: white;
    text-decoration: underline;
    transition: 0.2s all ease-in-out;
    &:hover {
      color: var(--pink);
    }
  }
  .img-wrapper {
    transition: 0.6s all ease-in-out;
    margin-bottom: 1rem;
  }
  .img-wrapper:hover {
    filter: hue-rotate(90deg);
    -webkit-box-shadow: 0px 0px 15px 5px var(--cyan);
    box-shadow: 0px 0px 15px 5px var(--cyan);
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto;

    p {
      width: 70%;
      text-align: center;
    }
  }
`
const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 1rem;
`
const Button = styled.a`
  width: 2rem;
  color: white;
  transition: 0.5s all ease-in-out;

  .icon {
    transition: 0.5s all ease-in-out;

    &:hover {
      color: var(--pink);
    }
    &:active {
      box-shadow: none;
    }
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

export default Skills
