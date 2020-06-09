import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.div`
  background-color: #e7ff19;
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 3px 0 #000000;
  color: #2c26ff;

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
  }
  .img_wrap:hover .hoverText {
    visibility: visible;
    opacity: 1;
  }
`
const Image = styled(Img)`
  width: 100%;
  margin: 0;
  padding: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
const GitHubButton = styled.a`
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 290486px;
  width: 50%;
  color: black;
  margin: 1rem 0;
  transition: 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    background-color: #2c26ff;
    color: #ffffff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 80%;
  }
`

const Skills = props => {
  return (
    <Wrapper>
      <a className="img_wrap" href={props.site}>
        <Image fluid={props.image} alt="project" />
        <h2 className="hoverText">Visit Page</h2>
      </a>
      <p>{props.text}</p>
      <p>{props.tech}</p>
      <GitHubButton href={props.gitHub}>GitHub</GitHubButton>{" "}
    </Wrapper>
  )
}

export default Skills
