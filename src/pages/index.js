import React from "react"
import Seo from "../components/seo"
import Home from "../components/homePage/home"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Home />
    </Layout>
  )
}

export default IndexPage
