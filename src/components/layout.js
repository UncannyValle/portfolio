/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import styled from "styled-components"
import Home from "../pages/home"
import About from "../pages/about"
import Projects from "../pages/projects"
import Contact from "../pages/contact"

const Footer = styled.footer`
  bottom: 0;
  width: 100%;
  text-align: center;
  position: relative;
  left: 0;
`
const Main = styled.main`
  margin-top: 5rem;
`

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Main>
      <Footer>Built by Julian Valle, © {new Date().getFullYear()}</Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
