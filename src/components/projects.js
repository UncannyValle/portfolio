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
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  width: 100%;
  padding: 0 2rem;
  grid-gap: 1em 1em;
  margin: 0 auto;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 2rem;
  }
`

export const Projects = (props) => {
  const data = useStaticQuery(graphql`
    query images {
      atole: file(relativePath: { eq: "atole_pic.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      sapa: file(relativePath: { eq: "sapa.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      avocado: file(relativePath: { eq: "avocado.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      movie: file(relativePath: { eq: "movie.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      mario: file(relativePath: { eq: "mario.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      calculator: file(relativePath: { eq: "calcutron.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  const skillList = [
    {
      title: "Atole Blog",
      src: getImage(data.atole),
      alt: "atole site",
      site: "https://atolemedia.com",
      text: "A Blog website for game and movie reviews",
      tech: "React | JS | CSS | GraphQl",
      gitHub: "https://github.com/UncannyValle/AtoleMedia",
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
      title: "Avocado Clock",
      src: getImage(data.avocado),
      alt: "avocado clock",
      site: "https://sapa-fashion.netlify.app/",
      text: "An Ecomerce Site Using Shopify",
      tech: "Gatsby | React | JS | GraphQl | Shopify",
      gitHub: "https://github.com/UncannyValle/Sapa-fashion",
    },
    {
      title: "Movie Quoter",
      src: getImage(data.movie),
      alt: "movie quote machine",
      site: "https://movie-quote-machine.netlify.com/",
      text: "Built in React, uses an external API to access data",
      tech: "React | JS | CSS | HTML | Netlify",
      gitHub: "https://github.com/UncannyValle/MovieQuote-machine",
    },
    {
      title: "Mario Drum Machine",
      src: getImage(data.mario),
      alt: "mario drummer",
      site: "https://mp-soundmaker.netlify.com",
      text: "A sound tester with the music of Mario Paint",
      tech: "React | JS | CSS | HTML | Netlify",
      gitHub: "https://github.com/UncannyValle/MarioPaintSoundMachine",
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
      opacity: .0,
    },
  })
  return (
    <div id={props.id}>
      <SectionWrapper>
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
                  a
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
    </div>
  )
}
