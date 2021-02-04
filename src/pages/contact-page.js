import React from "react"
import Layout from "../components/layout"
import Contact from "../components/contact"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
