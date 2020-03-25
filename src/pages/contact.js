import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import styled from "styled-components"

const ContactWrapper = styled.div`
  background-color: black;
  color: white;
  min-height: 93vh;
  h1 {
    padding: 1em 1em;
  }
`
const Contact = () => (
  <Layout>
    <SEO title="Contact Page" />
    <ContactWrapper>
      <h1>Contact Me</h1>
      <Form />
    </ContactWrapper>
  </Layout>
)
export default Contact
