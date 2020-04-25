import React from "react"
import styled from "styled-components"

import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <>
      <Home />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </>
  )
}

export default IndexPage
