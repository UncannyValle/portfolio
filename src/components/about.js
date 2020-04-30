import React from "react"
import styled from "styled-components"
import SEO from "./seo"
import selfie from "../images/selfie.jpg"
import Title from "./title"
import SectionWrapper from "./sectionWrapper"

const AboutWrapper = styled.div`
  display: flex;
  align-items: stretch;
  margin: 0;
  height: auto;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
  }
`
const AboutFlexItem = styled.div`
  width: 50%;
  font-size: 1.125rem;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    height: auto;
    width: 100%;
  }
  p {
    height: auto;
    width: 100%;
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const About = props => (
  <div id={props.id}>
    <SEO title="About me" />
    <SectionWrapper>
      <Title>A bit about me...</Title>
      <AboutWrapper>
        <AboutFlexItem>
          <img src={selfie} alt="Me!"></img>
        </AboutFlexItem>
        <AboutFlexItem>
          <p>
            I'm Julian Valle, I love to make
            creative, beautiful and responsive websites for small businesses
            and beyond! I am a self taught developer who is constantly learning
            new ways to solve everyday problems using code. If you are looking to hire me to help in your project click here! or have a look at my resume here: 
            {" "}
          </p>
          <hr/>
          <p>
            {" "}
            Here are the languages I speak and technologies I use:
          </p>
          <ul>
            <li>React</li>
            <li>Javascript</li>
          </ul>
        </AboutFlexItem>
      </AboutWrapper>
    </SectionWrapper>
  </div>
)

export default About
