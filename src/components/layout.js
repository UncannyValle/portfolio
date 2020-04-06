/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header"
import Home from "../sections/home"
import About from "../sections/about"
import Projects from "../sections/projects"
import Contact from "../sections/contact"

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

const Layout = () => {
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
