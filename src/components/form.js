import React from "react"
import styled from "styled-components"
import { useForm, ValidationError } from "@formspree/react"

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
    width: 100%;
    text-align: left;
    color: var(--pink);
    border: none;
  }
  input {
    width: 100%;
    height: 3rem;
    background-color: var(--black);
    color: cyan;
    border-radius: 15px;
    border: none;
    font-size: 2rem;
    padding: 1rem;
  }
  textarea {
    width: 100%;
    background-color: var(--black);
    color: cyan;
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

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`

const Form = () => {
  const [state, handleSubmit] = useForm("xvodaqva")
  if (state.succeeded) {
    return <h2>Thanks for joining!</h2>
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" required="required" />

      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" required="required" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required="required" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </StyledForm>
  )
}

export default Form
