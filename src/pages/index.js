import React from "react"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Uncanny Valle" />
      <Home />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
    </Layout>
  )
}

export default IndexPage
