import React from "react"
import styled from "styled-components"
import SEO from "./seo"
// import selfie from "../images/selfie.jpg"
import Title from "./title"
import SectionWrapper from "./sectionWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import resume from "../downloads/Julian_Valle_Garcia_-_Web_Developer.pdf"

const AboutWrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;

  .text {
    width: 60%;
    margin: 0 auto;
    font-size: 1.25rem;
  }
  .resume {
    background-color: white;
    display: inline-block;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 10%;
    color: #2c26ff;
    font-size: 3rem;
    transition: 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    h2 {
      color: #2c26ff;
      font-size: 1.5rem;
    }

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      background-color: #e7ff19;
      color: #2c26ff;
      h2 {
        color: #2c26ff;
      }
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
  }

  .skills {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    height: 10rem;
    font-size: 1.5rem;
    li {
      transition: all 200ms ease-in;

    }
    li:hover {
      background-color: #26fff9;
      color: #2c26ff;
      border: none;
      border-radius: 290486px;
      cursor: context-menu;
    }
  }
`
const About = props => (
  <div id={props.id}>
    <SEO title="About me" />
    <SectionWrapper>
      <Title>A bit about me...</Title>
      <AboutWrapper>
        <p className="text">
          I'm Julian Valle, I love to make creative, beautiful and responsive
          websites for small businesses and beyond! I am a self taught developer
          who is constantly learning new ways to solve everyday problems using
          code. If you are looking to hire me to help in your project click
          here! or have a look at my resume here:{" "}
        </p>
        <a
          className="resume"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faFile} />
          <h2>RESUME</h2>{" "}
        </a>

        <Title>Skills</Title>

        <ul className="skills">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React.js</li>
          <li>JQuery</li>
          <li>Git</li>
          <li>Bootstrap</li>
          <li>Wordpress</li>
          <li>Sass</li>
          <li>mySQL</li>
          <li>PHP</li>
          <li>Node.js</li>
        </ul>
      </AboutWrapper>
    </SectionWrapper>
  </div>
)

export default About
