import React from "react"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Layout from "../components/layout"
// import { helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <Layout >
      {/* <Helmet>
        
      </Helmet> */}
      <SEO title="Uncanny Valle" />
      <Home />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </Layout>
  )
}

export default IndexPage
