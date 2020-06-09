import React from "react"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout >
      <SEO title="Uncanny Valle" />
      <Home />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </Layout>
  )
}

export default IndexPage
