import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Title from "../components/title"
import ContactWrapper from "../components/sectionWrapper"

const Contact = () => (
  <Layout>
    <SEO title="Contact Page" />
    <ContactWrapper>
      <Title>Contact Me</Title>
      <Form />
    </ContactWrapper>
  </Layout>
)
export default Contact
