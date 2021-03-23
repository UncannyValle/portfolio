import React from "react"
import styled from "styled-components"
import Form from "./form"
import Title from "./title"
import Wrapper from "./sectionWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const ContactWrapper = styled(Wrapper)`
  margin-bottom: 0rem;
`
const SocialWrapper = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: space-around;
  height: 7rem;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.uncannyPurple};
    font-size: 3rem;
    transition: 0.5s;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.uncannyCyan};
    transform: scale(2);
    --webkit-transform: scale(2);
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
