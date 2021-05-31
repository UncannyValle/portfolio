import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <About />
    </Layout>
  )
}

export default AboutPage
