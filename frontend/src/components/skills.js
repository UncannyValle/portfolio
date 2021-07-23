import { animated, useSpring, config } from "@react-spring/web"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Wrapper = styled(animated(Link))`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 15px;
  background-color: var(--black);
  transition: all 0.3s ease-out;
  transition-delay: 0.3s;
  width: 100%;
  .title {
    margin-bottom: 1rem;
  }
  .line {
    height: 5px;
    background-color: var(--pink);
    margin: 0 auto;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
    padding: 0.5rem 0;
    display: inline-block;
  }
  .button {
    padding: 0.5rem 1rem;
    background-color: #7c4dff;
    border-radius: 290486px;
    width: 30%;
    color: white;
    margin: 1rem 0;
    display: block;
    border: 3px solid #7c4dff;
    transition: all 0.5s ease-out;
    &:hover {
      box-shadow: 0 10px 20px var(--pink), 0 6px 6px var(--pink);
      border-color: var(--pink);
    }
    &:active {
      box-shadow: none;
    }
    @media only screen and (max-width: 768px) {
      text-align: center;
      width: 50%;
    }
  }
  &:hover {
    box-shadow: 0 10px 20px cyan, 0 6px 6px cyan;
    border-color: cyan;
    .button {
      box-shadow: 0 10px 20px var(--pink), 0 6px 6px var(--pink);
      border-color: var(--pink);
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    padding: 0;
    p {
      width: 70%;
      text-align: center;
    }
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
    <Wrapper style={props.style} to={`/${props.slug}`}>
      <div className="title">
        <h3>{props.title}</h3>
        <animated.div className="line" style={animateBorder}></animated.div>
      </div>
      <div>{props.image}</div>
      {/* <p>{props.text}</p>
      <p>{props.tech}</p> */}

      <div className="button">More Info</div>
    </Wrapper>
  )
}

export default Skills
