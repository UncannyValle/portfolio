import { animated, useSpring, config } from "@react-spring/web"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Wrapper = styled(animated.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 15px;
  width: 80%;
  margin: 0 auto;

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
const ImageWrapper = styled.a`
  transition: all 0.3s ease-out;
  margin-bottom: 15px;
  box-shadow: 0 10px 20px cyan, 0 6px 6px cyan;
  &:hover {
    border-color: cyan;
    filter: hue-rotate(90deg);
  }
`
const InfoButton = styled(Link)`
  background-color: #7c4dff;
  padding: 10px;
  border-radius: 290486px;
  font-size: 1.5rem;
  color: white;
  margin: 1rem 0;
  transition: all 0.5s ease-out;
  &:hover {
    -webkit-box-shadow: 2px 5px 15px 5px #ea00d9;
    box-shadow: 2px 5px 15px 5px #ea00d9;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 50%;
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
      <ImageWrapper href={props.site}>{props.image}</ImageWrapper>
      <p>{props.text}</p>
      <p className="tech">{props.tech}</p>
      <InfoButton className="button" to={`/${props.slug}`}>
        More Info
      </InfoButton>
    </Wrapper>
  )
}

export default Skills
