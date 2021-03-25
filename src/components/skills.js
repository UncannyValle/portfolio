import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.div`
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: black;
  border-radius: 15px;
  background-color: #c5cae9;
  p {
    font-size: 1.2rem;
    margin: 1.5rem 1rem;
  }
  h2 {
    color: #ed6a5a;
    font-weight: 700;
    min-height: 6rem;
    margin-bottom: 1rem;
  }

  .img_wrap {
    position: relative;
    margin-bottom: 1rem;
    width: 100%;
  }
  .img_wrap:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 768px) {
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }
`
const Image = styled(Img)`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.2s all ease-in;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.15);
  }
`
const GitHubButton = styled.a`
  padding: 0.5rem 1rem;
  background-color: #7c4dff;
  border-radius: 290486px;
  width: 50%;
  color: white;
  margin: 1rem 0;
  transition: 0.2s all ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  &:active {
    box-shadow: none;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const Skills = props => {
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      <a className="img_wrap" href={props.site}>
        <Image fluid={props.image} alt="project" />
        {/* <h2 className="hoverText">Visit Page</h2> */}
      </a>
      <p>{props.text}</p>
      <h3>{props.tech}</h3>
      <GitHubButton href={props.gitHub} target="_blank">
        GitHub
      </GitHubButton>{" "}
    </Wrapper>
  )
}

export default Skills
