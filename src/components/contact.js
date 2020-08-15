import React from "react"
import styled from "styled-components"
import Form from "./form"
import Title from "./title"
import ContactWrapper from "./sectionWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const SocialWrapper = styled.div`
  text-align: center;
  margin: 2rem;
  a {
    color: white;
    font-size: 3rem;
    transition: 0.5s;
  }
  a:hover {
    color: #7c4dff;
  }
`

const Contact = props => (
  <div id={props.id}>
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
       
      </SocialWrapper>
    </ContactWrapper>
  </div>
)
export default Contact
