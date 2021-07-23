import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectPage = ({ data }) => {
  const project = data.allSanityProject.edges[0].node
  const image = getImage(project.image.asset)

  return (
    <Layout>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Tech>{project.tech}</Tech>
      <Image>
        <GatsbyImage image={image} alt={project.title} />
      </Image>
      <Body>{project.body}</Body>
    </Layout>
  )
}

const Title = styled.h1`
  text-align: center;
`
const Description = styled.h3`
  color: white;
  text-align: center;
`
const Tech = styled.h2`
  display: block;
  text-align: center;
`
const Image = styled.div`
  text-align: center;
`
const Body = styled.p`
  color: white;
  text-align: center;
`

export const query = graphql`
  query ($slug: String!) {
    allSanityProject(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          gitHubUrl
          projectUrl
          title
          description
          tech
          body
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED, width: 800)
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`
export default ProjectPage
