import React from "react"
import styles from "./index.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.wrapper}>
      <div className={styles.home}>
        <h1>Hi, I'm Julian!</h1>
        <p>Front End Developer</p>
        <p>React Programmer | Freelancer | Silly Husband</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
