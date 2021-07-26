import React from "react"
import Seo from "../components/seo"
import Splash from "../components/homePage/splash"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Main Page" />
      <Splash />
    </Layout>
  )
}

export default IndexPage
