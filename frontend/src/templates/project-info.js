import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Github } from "@styled-icons/entypo-social/Github"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { TransitEnterexit } from "@styled-icons/material-outlined/TransitEnterexit"
const BlockContent = require("@sanity/block-content-to-react")

const ProjectInfo = ({ data }) => {
  const project = data.sanityProject

  const BlockRenderer = (props) => {
    const { style = "normal" } = props.node

    if (/^h\d/.test(style)) {
      const level = style.replace(/[^\d]/g, "")
      return React.createElement(
        style,
        { className: `heading-${level}` },
        props.children
      )
    }

    if (style === "blockquote") {
      return <blockquote>- {props.children}</blockquote>
    }

    // Fall back to default handling
    return BlockContent.defaultSerializers.types.block(props)
  }

  return (
    <Layout>
      <Container>
        <Title>{project.title}</Title>{" "}
        <Description>{project.description}</Description>
        <Tech>
          <h3 className="used">Tech Used: </h3>
          <h3 className="tech">{project.tech}</h3>
        </Tech>
        <Links>
          <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
            View Code <Github />
          </a>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site <TransitEnterexit />
          </a>
        </Links>
        <Body
          serializers={{ types: { block: BlockRenderer } }}
          blocks={project._rawBody}
          imageOptions={{ maxWidth: 800, height: 500 }}
          projectId="w35schq2"
          dataset="production"
        />
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  margin: 0 auto;
`
const Title = styled.h1`
  text-align: left;
  padding-top: 50px;
`
const Description = styled.h3`
  color: white;
  text-align: left;
  margin-top: 50px;
`
const Tech = styled.div`
  display: block;
  color: white;
  padding: 1rem 0;
  h3 {
    font-size: 18px;
    text-align: left;
    display: inline;
  }
  .used {
    color: var(--pink);
  }
`
const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1.25rem;
  a {
    font-size: 30px;
    color: white;
    transition: color 0.2s ease-out;
    padding-right: 2rem;
  }
  ${StyledIconBase} {
    width: 30px;
  }
  & a:first-child:hover {
    color: var(--pink);
  }
  & a:last-child:hover {
    color: cyan;
  }
`

const Body = styled(BlockContent)`
  color: white;
  text-align: left;
  p {
    font-size: 21px;
  }
  img {
    width: 100%;
    height: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }
`

export const query = graphql`
  query ($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      tech
      title
      gitHubUrl
      description
      _rawBody
      projectUrl
    }
  }
`
export default ProjectInfo
