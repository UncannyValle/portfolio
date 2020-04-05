import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Home from "../pages/home"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"

const Main = styled.main`
  margin-top: 5rem;
`

const IndexPage = () => (
  <Main>
    <SEO title="Home" />
    <Home />
    <About />
    <Projects />
    <Contact />
  </Main>
)

export default IndexPage
