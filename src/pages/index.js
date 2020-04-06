/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

import Header from "../components/header"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  left: 0;
  padding: 1rem 0;
  position: relative;
  bottom: -100vh;
  color: white;
  @media (max-width: 520px) {
    margin: 0;
    color: black;
    padding: 0;
  }
`
const Main = styled.main`
  position: relative;
  top: 100vh;
  height: 100%;
`

const IndexPage = () => {
  return (
    <>
      <Header />
      <Home />
      <Main>
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </Main>
      <Footer>Built by Julian Valle, © {new Date().getFullYear()}</Footer>
    </>
  )
}



export default IndexPage
