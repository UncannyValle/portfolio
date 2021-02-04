import React from "react"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Contact from "../components/contact"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Main Page" />
      <Home />
      <About id="about" />
      <Contact id="contact" />
    </Layout>
  )
}

export default IndexPage
