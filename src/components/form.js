import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  height: auto;
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font.text};
  font-size: 1.5rem;
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  label {
    margin: .5rem auto;
    width: 70%;
    text-align: left;
    color: white;
    border: none;
  }
  label input {
    width: 100%;
    height: 3rem;
    background-color: white;
    color: black;
    border-radius: 15px;
    border: none;
    font-size: 2rem;
    padding: 1rem;
  }
  label textarea {
    width: 100%;
    background-color: white;
    color: black;
    height: 10rem;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 15px;
    border: none;
  }
  button {
    margin: 1em auto;
    padding: 0.25em 1.5em;
    background-color: #ffffff;
    border-radius: 290486px;
    color: #2352e8;
    transition: 0.2s;
    font-size: 1.5rem;
    border: none;
    &:hover {
      background-color: #7c4dff;
      color: white;
      border-radius: 290486px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      cursor: pointer;
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
      Name
      <input type="text" name="name" required="required" />
    </label>
    <label>
      E-mail
      <input type="email" name="email" required="required" />
    </label>
    <label>
      Message
      <textarea name="message" required="required" />
    </label>
    <button type="submit">Send</button>
  </StyledForm>
)

export default Form
