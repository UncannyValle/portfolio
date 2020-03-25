import React from "react"
import style from "./form.module.css"

const Form = () => (
  <form
    className={style.form}
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="Contact Form" />
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
  </form>
)

export default Form
