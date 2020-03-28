import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import selfie from "../images/selfie.jpg"

const Wrapper = styled.div`
  min-height: 90vh;
  background-color: black;
  color: white;
  h2 {
    padding: 3em 0 1em 10em;
  }
`
const AboutWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 0 auto;

  p {
    width: 45%;
    text-align: justify;
    font-size: 1.125em;
  }
  img {
    width: 45%;
    height: auto;
  }
  @media only screen and (max-width: 520px) {
    flex-wrap: wrap;
    width: 90%;
    p {
      width: 100%;
    }
    img {
      width: 70%;
    }
  }
`

const About = () => (
  <Layout>
    <SEO title="About me" />
    <Wrapper>
      <h2>A bit about me...</h2>
      <AboutWrapper>
        <img src={selfie} alt="Me!"></img>
        <p>
          I'm Julian Valle, a Front-End Web Developer who loves to make
          creative, responsive and functional websites for small businesses and
          beyond! I am a self taught developer who is constantly learning new
          ways to solve everyday problems using code. <br />
          <br /> I work mostly using Javascript (React, Gatsby), HTML and
          CSS(Sass, CSS Modules) but I am always learning new technologies and
          staying up to date. <br />
          <br />I also have a background in Psychology, I am a great team
          player, always there to help out the client, and I make extremely
          delicious tacos!
        </p>
      </AboutWrapper>
    </Wrapper>
  </Layout>
)

export default About
