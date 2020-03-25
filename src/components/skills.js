import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: gray;
  padding: 1em;
  text-align: center;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  img {
    margin: 0;
    padding: 0;
  }
`
const GitHubButton = styled.a`
  padding: 0.5em 1em;
  background-color: white;
  border-radius: 15px;
  width:50%;
  color:black;
`

const Skills = props => {
  return (
    <Wrapper>
      <a href={props.site}>
        <img src={props.image} alt="project"></img>
      </a>
      <p>{props.text}</p>
      <p>{props.tech}</p>
      <GitHubButton href={props.gitHub}>
        GitHub
      </GitHubButton>{" "}
    </Wrapper>
  )
}

export default Skills
