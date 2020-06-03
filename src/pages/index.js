import React from "react"
// import styled from "styled-components"

import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout >
      <Home />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </Layout>
  )
}

export default IndexPage
