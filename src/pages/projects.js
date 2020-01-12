import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./projects.module.css"

const Projects = () => (
  <Layout>
    <SEO title="Projects Page" />
    <div className={styles.projects}>
      <h1>Projects Page</h1>
    </div>
  </Layout>
)
export default Projects
