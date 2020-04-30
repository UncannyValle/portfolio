import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #23B9E8;
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 3px 0 #000000;
  color: #ffffff;
  a {
    position: relative;
  }
  img {
    /* margin: 0;
    padding: 0; */
    width: 90%;
    transition: 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  h2 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
const GitHubButton = styled.a`
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 15px;
  width: 50%;
  color: black;
  margin: 1rem 0;
  transition: 0.5s;

  &:hover {
    background-color: #95e6d5;
  }
`

const Skills = props => {
  return (
    <Wrapper>
      <a href={props.site}>
        <img src={props.image} alt="project"></img>
        <h2 className="hoverText">Visit Page</h2>
      </a>
      <p>{props.text}</p>
      <p>{props.tech}</p>
      <GitHubButton href={props.gitHub}>GitHub</GitHubButton>{" "}
    </Wrapper>
  )
}

export default Skills
