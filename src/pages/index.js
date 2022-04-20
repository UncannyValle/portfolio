import React from "react"
import Seo from "../components/seo"
import Home from "../components/homePage/home"
import Layout from "../components/layout"
import Contact from "../components/contact"
import { Projects } from "../components/projects"
import About from "../components/about"

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Home />
      <Projects />
      <About />
      <Contact />
    </Layout>
  )
}

export default IndexPage
