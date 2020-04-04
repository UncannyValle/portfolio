import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import About from "./about"

// CSS
const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 520px) {
    heigth: auto;
  }
`
const Home = styled.div`
  margin-left: 3rem;

  @media only screen and (max-width: 520px) {
    margin: 0;
    text-align: center;
    h2 {
      font-size: 1.5rem;
      margin-left: 1rem;
    }
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Home>
      <h1>Hi, I'm Julian!</h1>
      <h2>Front End Developer</h2>
      <h2>React Programmer | Freelancer | Silly Husband</h2>
    </Home>
  </>
)

export default IndexPage
