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
  color: #ffffff;
  background-color: #3f51b5;
  p {
    font-size: 1.2rem;
    margin: 1.5rem 1rem;
  }

  .img_wrap {
    position: relative;
    margin-bottom: 1rem;
    width: 100%;
  }
  .img_wrap:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .hoverText {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(29, 106, 154, 0.72);
    color: #fff;
    visibility: hidden;
    opacity: 0;
    padding-top: 25%;
    transition: opacity 0.2s, visibility 0.2s;
    font-size: 3rem;
    @media (max-width: 768px) {
      visibility: visible;
      opacity: 1;
    }
  }
  .img_wrap:hover .hoverText {
    visibility: visible;
    opacity: 1;
  }
`
const Image = styled(Img)`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
    width: 80%;
  }
`

const Skills = props => {
  return (
    <Wrapper>
    <h2>{props.title}</h2>
      <a className="img_wrap" href={props.site}>
        <Image fluid={props.image} alt="project" />
        <h2 className="hoverText">Visit Page</h2>
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
