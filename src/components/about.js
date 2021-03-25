import React from "react"
import styled from "styled-components"
import Title from "./title"
import SectionWrapper from "./sectionWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import resumePDF from "../downloads/Julian_Valle_Web_Dev_Resume.pdf"

const AboutWrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;

  .text {
    width: 60%;
    margin: 0 auto;
    font-size: 1.25rem;
    color: white;
  }
  .resume {
    background-color: #7c4dff;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    width: 20rem;
    margin: 1rem 2rem;
    padding: 1rem;
    border-radius: 15px;
    color: white;
    font-size: 3rem;
    transition: 0.2s all ease-in-out;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    h2 {
      color: white;
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
      color: white;
    }

    &:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    .text {
      width: 90%;
      text-align: justify;
    }
    .resume {
      margin: 1rem 0.5rem;
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    height: 10rem;
    font-size: 1.5rem;
    color: cyan;
    li {
      transition: all 200ms ease-in;
    }
    li:hover {
      background-color: #7c4dff;
      color: white;
      border: none;
      border-radius: 290486px;
      cursor: context-menu;
    }
  }
`
const About = props => (
  <div id={props.id}>
    <SectionWrapper>
      <Title>A bit about me...</Title>
      <AboutWrapper>
        <p className="text">
          I'm Julian Valle, I love to make creative, beautiful and responsive
          websites for small businesses and beyond! I am a self taught developer
          who is constantly learning new ways to solve everyday problems using
          code. Hit me up if you want to collaborate or want to share salsa
          recipes.
        </p>
        <a
          className="resume"
          href="https://docs.google.com/document/d/16hguuxwODZmWrIda3N7RkRgHPfI2kE6LimPfL_PGYkg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faFile} />
          <h2>View Resume</h2>
        </a>

        <Title>Skills</Title>

        <ul className="skills">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React.js</li>
          <li>Tailwind</li>
          <li>Git</li>
          <li>Bootstrap</li>
          <li>GraphQL</li>
          <li>Sass</li>
          <li>mySQL</li>
          <li>Gatsby</li>
          <li>CSS-In-Js</li>
        </ul>
      </AboutWrapper>
    </SectionWrapper>
  </div>
)

export default About
