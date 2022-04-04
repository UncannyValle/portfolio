import { animated, useSpring, config } from "@react-spring/web"
import React from "react"
import styled from "styled-components"

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

  p {
    font-size: 1.2rem;
    display: inline-block;
    text-align: center;
  }
  .img-wrapper {
    transition: 0.6s all ease-in-out;
    padding-bottom: .5rem;
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
`
const Button = styled.a`
  padding: 0.5rem 1rem;
  background-color: #7c4dff;
  border-radius: 290486px;
  width: 30%;
  color: white;
  margin: 1rem 0;
  transition: 0.5s all ease-in-out;
  display: inline-block;
  &:hover {
    box-shadow: 0 10px 20px var(--pink), 0 6px 6px var(--pink);
  }
  &:active {
    box-shadow: none;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const Skills = (props) => {
  const animateBorder = useSpring({
    width: "100%",
    delay: 300,
    config: config.molasses,
    from: {
      width: "0%",
    },
  })
  return (
    <Wrapper style={props.style}>
      <div className="title">
        <h3>{props.title}</h3>
        <animated.div className="line" style={animateBorder}></animated.div>
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
        <Button href={props.gitHub} target="_blank" rel="noreferrer">
          GitHub
        </Button>
        <Button href={props.site} target="_blank" rel="noreferrer">
          Site
        </Button>
      </Buttons>
    </Wrapper>
  )
}

export default Skills
