import React from "react"
import style from "./form.module.css"

const Form = () => (
  <form
    className={style.form}
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <input type="hidden" name="bot-field" />
    <label>
      E-mail
      <input
        type="email"
        name="email"
        required="required"
      />
    </label>
    <label>
      Name
      <input type="text" name="name" required="required" />
    </label>
    <label>
      Subject
      <input
        type="text"
        name="subject"
        required="required"
      />
    </label>
    <label>
      Message
      <textarea name="message" required="required" />
    </label>
    <button type="submit">Send</button>
  </form>
)

export default Form