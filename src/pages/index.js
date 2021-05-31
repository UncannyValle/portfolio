import React from "react"
import SEO from "../components/seo"
import Home from "../components/homePage/home"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Main Page" />
      <Home />
    </Layout>
  )
}

export default IndexPage
