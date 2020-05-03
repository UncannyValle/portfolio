import React from "react"
import styled from "styled-components"
import SEO from "./seo"
import selfie from "../images/selfie.jpg"
import Title from "./title"
import SectionWrapper from "./sectionWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"

const AboutWrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  a {
    color: white;
    font-size: 3rem;
    transition:.2s;
  }
  a:hover {
    color: #2c26ff;
  }
  .text {
    width: 60%;
    margin: 0 auto;
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
  }

  .skills {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    height: 10rem;
    font-size: 1.5rem;
  }
`
const About = props => (
  <div id={props.id}>
    <SEO title="About me" />
    <SectionWrapper>
      <Title>A bit about me...</Title>
      <AboutWrapper>
        {/* <AboutFlexItem>
          <img src={selfie} alt="Me!"></img>
        </AboutFlexItem> */}

        <p className="text">
          I'm Julian Valle, I love to make creative, beautiful and responsive
          websites for small businesses and beyond! I am a self taught developer
          who is constantly learning new ways to solve everyday problems using
          code. If you are looking to hire me to help in your project click
          here! or have a look at my resume here:{" "}
        </p>

        <a
          href="https://resume.io/r/xhD8EPtnQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faFile} />
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
