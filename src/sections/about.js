import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import selfie from "../images/selfie.jpg"
import Title from "../components/title"
import SectionWrapper from "../components/sectionWrapper"

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
  justify-content: space-between;
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
    height: 25rem;
  }
`

const About = (props) => (
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
            I'm Julian Valle, a Front-End Web Developer who loves to make
            creative, responsive and functional websites for small businesses
            and beyond! I am a self taught developer who is constantly learning
            new ways to solve everyday problems using code.{" "}
          </p>
          <br />
          <p>
            {" "}
            I work mostly using Javascript (React, Gatsby), HTML and CSS(Sass,
            CSS Modules) but I am always learning new technologies and staying
            up to date.{" "}
          </p>
          <br />
          <p>
            I also have a background in Psychology, I am a great team player,
            always there to help out the client, and I make extremely delicious
            tacos!
          </p>
          <br />
        </AboutFlexItem>
      </AboutWrapper>
    </SectionWrapper>
  </div>
)

export default About
