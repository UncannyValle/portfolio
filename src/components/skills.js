import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #ffeaa6;
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 3px 0 #000000;
  color: #0d0d0d;

  img {
    margin: 0;
    padding: 0;
    max-width: 100%;
  }
`
const GitHubButton = styled.a`
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 15px;
  width: 50%;
  color: black;
  margin: 1rem 0;
`

const Skills = props => {
  return (
    <Wrapper>
      <a href={props.site}>
        <img src={props.image} alt="project"></img>
      </a>
      <p>{props.text}</p>
      <p>{props.tech}</p>
      <GitHubButton href={props.gitHub}>GitHub</GitHubButton>{" "}
    </Wrapper>
  )
}

export default Skills
