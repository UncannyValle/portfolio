import React from "react"
import SEO from "../components/seo"
import Form from "../components/form"
import Title from "../components/title"
import ContactWrapper from "../components/sectionWrapper"

const Contact = () => (
  <>
    <SEO title="Contact Page" />
    <ContactWrapper>
      <Title>Contact Me</Title>
      <Form />
    </ContactWrapper>
  </>
)
export default Contact
