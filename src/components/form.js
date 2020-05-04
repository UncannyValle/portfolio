import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  background-color: #23b9e8;
  width: 30rem;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  label {
    margin: 1em auto;
    padding: 0;
    width: 70%;
    text-align: left;
    color: white;
  }
  label input {
    width: 100%;
    background-color: white;
    color: black;
  }
  label textarea {
    width: 100%;
    background-color: white;
    color: black;
  }
  button {
    margin: 1em auto;
    padding: 0.25em 1.5em;
    background-color: #95e6d5;
    border-radius: 290486px;
    color: #2352e8;
    transition: .2s;
    &:hover {
      background-color: #2352e8;
      color: white;
      border-radius: 290486px;
    }
  }

  @media only screen and (max-width: 520px) {
    width: 90%;
  }
`

const Form = () => (
  <StyledForm
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />
    <label>
      E-mail
      <input type="email" name="email" required="required" />
    </label>
    <label>
      Name
      <input type="text" name="name" required="required" />
    </label>
    <label>
      Subject
      <input type="text" name="subject" required="required" />
    </label>
    <label>
      Message
      <textarea name="message" required="required" />
    </label>
    <button type="submit">Send</button>
  </StyledForm>
)

export default Form
