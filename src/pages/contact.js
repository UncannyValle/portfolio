import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import styled from "styled-components"

const ContactWrapper = styled.div`
  background-color: black;
  color: white;
  min-height: 90vh;
  h2 {
    padding: 1em 1em;
  }
`
const Contact = () => (
  <Layout>
    <SEO title="Contact Page" />
    <ContactWrapper>
      <h2>Contact Me</h2>
      <Form />
    </ContactWrapper>
  </Layout>
)
export default Contact
