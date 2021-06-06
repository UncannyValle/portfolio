import React from "react"
import styled from "styled-components"
import Title from "./title"
import SectionWrapper from "./sectionWrapper"
import { FileDownload } from "@styled-icons/fa-solid"

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
    @media (max-width: 768px) {
      margin: 0 1rem;
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
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 90%;
    align-items: center;
    .text {
      width: 90%;
    }
    .resume {
      margin: 1rem;
    }
    .skills {
      font-size: 1rem;
    }
  }
`
const About = (props) => {
 
  return (
    <div id={props.id}>
      <SectionWrapper>
        <Title>A bit about me...</Title>
        <AboutWrapper>
          <p className="text">
            I'm Julian Valle, I love to make creative, beautiful and responsive
            websites for small businesses and beyond! I am a self taught
            developer working mainly in React and in the JAMstack making sites
            using Gatsby and that ecosystem
            <br />
            <br />
            So far I have ben trying to absorb as much as possible in order to
            be able to hit the ground running in any new project I am needed in.
            So I have been learning what would me be most needed as Junior
            Developer and get prepared there.
            <br />
            <br />I live in New York City with my lovely wife, where we spend
            our time walking the city and getting into strange adventures!
          </p>

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
          <a
            className="resume"
            href="https://drive.google.com/file/d/1KHadlWe19VAhHycZVBANUl4MczKRKzdn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FileDownload size="30" />
            <h2>View Resume</h2>
          </a>
        </AboutWrapper>
      </SectionWrapper>
    </div>
  )
}

export default About
