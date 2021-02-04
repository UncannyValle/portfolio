import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import SEO from "../components/seo"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <About />
    </Layout>
  )
}

export default BlogPage
