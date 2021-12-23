import React from "react"
import Layout from "../components/layout"
import Contact from "../components/contact"
import Seo from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
