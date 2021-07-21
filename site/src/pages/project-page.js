import React from "react"
import Layout from "../components/layout"
import { Projects } from "../components/projects"
import Seo from "../components/seo"

const ProjectPage = () => {
  return (
    <Layout>
      <Seo title="Projects" />
      <Projects />
    </Layout>
  )
}

export default ProjectPage
