import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <About />
    </Layout>
  )
}

export default AboutPage
