import React from "react"
import Skills from "./skills"
import Title from "./title"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import SectionWrapper from "./sectionWrapper"
import { useTrail, config } from "@react-spring/core"
import { graphql, useStaticQuery } from "gatsby"

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  width: 100%;
  grid-gap: 10rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
  }
`

export const Projects = (props) => {
  const data = useStaticQuery(graphql`
    query images {
      atole: file(relativePath: { eq: "atole.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED,  aspectRatio: 1.778)
        }
      }
      sapa: file(relativePath: { eq: "sapa.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED,  aspectRatio: 1.778)
        }
      }
      calculator: file(relativePath: { eq: "calcutron.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED,  aspectRatio: 1.778)
        }
      }
      marco: file(relativePath: { eq: "marco.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED,  aspectRatio: 1.778)
        }
      }
      disney: file(relativePath: { eq: "disney.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED,  aspectRatio: 1.778)
        }
      }
      onestop: file(relativePath: { eq: "onestop.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED,  aspectRatio: 1.778)
        }
      }
    }
  `)

  const skillList = [
    {
      title: "Onestop Portal",
      src: getImage(data.onestop),
      alt: "Maryland onestop",
      site: "https://onestop.md.gov",
      text: "Project for the state of Maryland. Worked on Front End and design system.",
      tech: "Vue | Ruby on Rails | Sass"
    },
    {
      title: "Disney+ Clone",
      src: getImage(data.disney),
      alt: "Disney Clone",
      site: "https://disneyclone-ccbe6.web.app",
      text: "Disney+ clone with sign in functionality",
      tech: "React | Firebase | Google OAuth",
      gitHub: "https://github.com/UncannyValle/disney-clone",
    },
    {
      title: "Marco's Studio",
      src: getImage(data.marco),
      alt: "Marco's studio",
      site: "https://marcostudio.gatsbyjs.io",
      text: "Art Gallery site",
      tech: "React | Gatsby | Styled Components",
      gitHub:
        "https://github.com/UncannyValle/marco-studio/tree/main/src/components",
    },
    {
      title: "Atole Tech",
      src: getImage(data.atole),
      alt: "atole site",
      site: "https://atoletech.gatsbyjs.io",
      text: "Freelance website: Where folklore meets design",
      tech: "React | JS | Styled-Components | GraphQl",
      gitHub: "https://github.com/Atole-Media/atole-tech-website",
    },
    {
      title: "Sapa Fashion Store",
      src: getImage(data.sapa),
      alt: "ecomerce site",
      site: "https://sapa-fashion.netlify.app/",
      text: "An Ecomerce Site Using Shopify",
      tech: "Gatsby | React | JS | GraphQl | Shopify",
      gitHub: "https://github.com/UncannyValle/Sapa-fashion",
    },
    {
      title: "Calculator App",
      src: getImage(data.calculator),
      alt: "calculator app",
      site: "https://calcutron.netlify.com",
      text: "Just a calculator made with React",
      tech: "React | JS | CSS | HTML | Netlify",
      gitHub: "https://github.com/UncannyValle/calcutron",
    },
    
  ]
  const boxTrail = useTrail(skillList.length, {
    opacity: 1,
    config: config.molasses,
    from: {
      opacity: 0.0,
    },
  })
  return (
    <SectionWrapper id="projects">
      <Title>A bit of my work</Title>
      <SkillsWrapper>
        {boxTrail.map((style, i) => (
          <Skills
            style={style}
            key={i}
            title={skillList[i].title}
            image={
              <GatsbyImage
                image={skillList[i].src}
                alt={skillList[i].alt}
                placeholder="blurred"
              />
            }
            site={skillList[i].site}
            text={skillList[i].text}
            tech={skillList[i].tech}
            gitHub={skillList[i].gitHub}
          />
        ))}
      </SkillsWrapper>
    </SectionWrapper>
  )
}
