import React from "react"
import styled from "styled-components"
import SEO from "./seo"
import Form from "./form"
import Title from "./title"
import ContactWrapper from "./sectionWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"

const SocialWrapper = styled.div`
  text-align: center;
  margin: 2rem;
  a {
    font-size: 3rem;
    color: white;
  }
`

const Contact = props => (
  <div id={props.id}>
    <SEO title="Contact Page" />
    <ContactWrapper>
      <Title>Contact Me</Title>
      <Form />
      <SocialWrapper>
        <a
          href="https://linkedin.com/in/uncannyvalle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/uncannyvalle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://twitter.com/theuncannyvalle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://resume.io/r/xhD8EPtnQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faFile} />
        </a>
      </SocialWrapper>
    </ContactWrapper>
  </div>
)
export default Contact
