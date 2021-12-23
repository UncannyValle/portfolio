import React from "react"
import styled from "styled-components"
import Form from "./form"
import Title from "./title"
import Wrapper from "./sectionWrapper"

const ContactWrapper = styled(Wrapper)`
  margin-bottom: 0rem;
  p {
    color: ${({ theme }) => theme.colors.uncannyPlatinum};
    margin: 0 auto;
    text-align: center;
  }
  a {
    color: ${({ theme }) => theme.colors.uncannyCyan};
    font-size: 1.5rem;
    transition: 0.5s;
  }
`


const Contact = props => (
  <div id={props.id}>
    <ContactWrapper>
      <Title>Contact Me</Title>
      <p>
        Feel free to contact me at{" "}
        <a href="mailto:julianv@atolemedia.com">julianv@atolemedia.com</a>
        <br />
        or use the contact form below.
      </p>
      <Form />
      
    </ContactWrapper>
  </div>
)
export default Contact
