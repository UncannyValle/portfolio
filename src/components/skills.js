import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 15px;
  background-color: var(--black);
  min-height: 70vh;
  p {
    font-size: 1.2rem;
    display: inline-block;
  }
  h2 {
    margin: 0;
    min-height: 9rem;
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
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      <a className="img_wrap" href={props.site} target="_blank">
        {props.image}
      </a>
      <p>{props.text}</p>
      <h3>{props.tech}</h3>
      <Buttons>
        <Button href={props.gitHub} target="_blank">
          GitHub
        </Button>{" "}
        <Button href={props.site} target="_blank">
          Site
        </Button>
      </Buttons>
    </Wrapper>
  )
}

export default Skills
