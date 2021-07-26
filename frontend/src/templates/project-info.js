import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Github } from "@styled-icons/entypo-social/Github"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { TransitEnterexit } from "@styled-icons/material-outlined/TransitEnterexit"

const ProjectInfo = ({ data }) => {
  const project = data.allSanityProject.edges[0].node
  const image = getImage(project.images.asset)

  return (
    <Container>
      <Title>{project.title}</Title>{" "}
      <Description>{project.description}</Description>
      <Tech>
        <h3>
          Tech Used:
          {project.tech}
        </h3>
      </Tech>
      <Links>
        <a href={project.gitHubUrl}>
          <Github />
          <TransitEnterexit />
        </a>
      </Links>
      <Image>
        <GatsbyImage image={image} alt={project.title} />
      </Image>
      <Body>{project.body}</Body>
    </Container>
  )
}

const Container = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
`
const Title = styled.h1`
  text-align: center;
  padding-top: 50px;
`
const Description = styled.h3`
  color: white;
  text-align: center;
  margin-top: 50px;
`
const Tech = styled.div`
  display: block;
  text-align: center;
  color: white;
  h3 {
    font-size: 23px;
  }
`
const Links = styled.div`
  a {
    font-size: 30px;
    color: white;
  }
  ${StyledIconBase} {
    width: 30px;
  }
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
          images {
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
export default ProjectInfo
