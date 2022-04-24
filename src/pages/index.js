import React, { useEffect, useState } from "react"
import Seo from "../components/seo"
import Home from "../components/homePage/home"
import Layout from "../components/layout"
import Contact from "../components/contact"
import { Projects } from "../components/projects"
import About from "../components/about"
import TheScene from "../components/objects/scene"
// import Box from "../components/objects/box"

const IndexPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 300)
  }, [])

  return (
    <>
      <Layout loading={loading}>
        <Seo />
        <Home />
        {/* <TheScene  /> */}
        <Projects />
        <About />
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
