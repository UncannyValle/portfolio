import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Form from "../components/form"
import Title from "../components/title"
import ContactWrapper from "../components/sectionWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter,faLinkedin } from "@fortawesome/free-brands-svg-icons"

const SocialWrapper = styled.div`
  display: flex;
  font-size: 3rem;
`

const Contact = props => (
  <div id={props.id}>
    <SEO title="Contact Page" />
    <ContactWrapper>
      <Title>Contact Me</Title>
      <Form />
      <SocialWrapper>
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faTwitter} />
      </SocialWrapper>
    </ContactWrapper>
  </div>
)
export default Contact
