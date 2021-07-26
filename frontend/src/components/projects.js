import React from "react"
import Skills from "./skills"
import Title from "./title"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { useTrail, config } from "@react-spring/core"
import { graphql, useStaticQuery } from "gatsby"

export const Projects = (props) => {
  const data = useStaticQuery(graphql`
    query sanity {
      allSanityProject(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            images {
              asset {
                gatsbyImageData(placeholder: BLURRED, fit: FILLMAX)
              }
            }
            slug {
              current
            }
            gitHubUrl
            projectUrl
            title
            description
            tech
          }
        }
      }
    }
  `)

  const boxTrail = useTrail(data.allSanityProject.edges.length, {
    opacity: 1,
    config: config.molasses,
    from: {
      opacity: 0.0,
    },
  })

  return (
    <>
      <Title>A bit of my work</Title>
      <SkillsWrapper>
        {boxTrail.map((style, i) => (
          <Skills
            style={style}
            key={i}
            title={data.allSanityProject.edges[i].node.title}
            image={
              <GatsbyImage
                image={
                  data.allSanityProject.edges[i].node.images[0].asset
                    .gatsbyImageData
                }
                a
                alt={data.allSanityProject.edges[i].node.title}
                placeholder="blurred"
              />
            }
            site={data.allSanityProject.edges[i].node.projectUrl}
            text={data.allSanityProject.edges[i].node.description}
            tech={data.allSanityProject.edges[i].node.tech}
            gitHub={data.allSanityProject.edges[i].node.gitHubUrl}
            slug={data.allSanityProject.edges[i].node.slug.current}
          />
        ))}
      </SkillsWrapper>
    </>
  )
}

const SkillsWrapper = styled.div`
  /* display: grid; */
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  grid-gap: 5rem;
  width: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }
`
