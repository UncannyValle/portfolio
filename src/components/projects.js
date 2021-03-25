import React from "react"
import Skills from "./skills"
import Title from "./title"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import SectionWrapper from "./sectionWrapper"

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 95%;
  grid-gap: 1em 1em;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 2em;
  }
`

const Projects = props => {
  const data = useStaticQuery(graphql`
    {
      calcutron: file(relativePath: { eq: "calcutron.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      atole: file(relativePath: { eq: "atole_pic.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      movie: file(relativePath: { eq: "movie.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      mario: file(relativePath: { eq: "mario.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sapa: file(relativePath: { eq: "sapa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      avocado: file(relativePath: { eq: "avocado.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div id={props.id}>
      <SectionWrapper>
        <Title>A bit of my work</Title>
        <SkillsWrapper>
          <Skills
            image={data.atole.childImageSharp.fluid}
            title={"Atole Blog"}
            site={"https://atolemedia.com"}
            text={"A Blog website for game and movie reviews"}
            tech={"React | JS | CSS | GraphQl"}
            gitHub={"https://github.com/UncannyValle/AtoleMedia"}
          />
          <Skills
            image={data.sapa.childImageSharp.fluid}
            title={"Sapa Fashion Store"}
            site={"https://sapa-fashion.netlify.app/"}
            text={"An Ecomerce Site Using Shopify"}
            tech={"Gatsby | React | JS | GraphQl | Shopify"}
            gitHub={"https://github.com/UncannyValle/Sapa-fashion"}
          />
          <Skills
            image={data.avocado.childImageSharp.fluid}
            title={"Work Clock-Avocado"}
            site={"https://avocadoclock.netlify.com/"}
            text={"An anti procrastination timer using react"}
            tech={"React | JS | XML | CSS"}
            gitHub={"https://github.com/UncannyValle/Avocado-Clock"}
          />
          {/* <Skills
            image={data.danny.childImageSharp.fluid}
            site={"https://lbalvarez8.github.io/Happy-Birthday-Danny/"}
            text={
              "A JS browser game, worked in a team and helped code the gameplay"
            }
            tech={"Javascript | jQuery | CSS | HTML | Git "}
            gitHub={"https://github.com/UncannyValle/Danny-Boy"}
          /> */}
          <Skills
            image={data.movie.childImageSharp.fluid}
            title={"Movie Quoter"}
            site={"https://movie-quote-machine.netlify.com/"}
            text={"Built in React, uses an external API to access data"}
            tech={"React | JS | CSS | HTML | Netlify"}
            gitHub={"https://github.com/UncannyValle/MovieQuote-machine"}
          />
          {/* <Skills
            image={data.markdown.childImageSharp.fluid}
            site={"https://mrkdw-preview-machine.netlify.com/"}
            text={"A markdown previewer using React"}
            tech={"React | JS | CSS | HTML | Netlify"}
            gitHub={"https://github.com/UncannyValle/markdown-previewer"}
          /> */}
          <Skills
            image={data.mario.childImageSharp.fluid}
            title={"Mario Drum Machine"}
            site={"https://mp-soundmaker.netlify.com"}
            text={"A sound tester with the music of Mario Paint"}
            tech={"React | JS | CSS | HTML | Netlify"}
            gitHub={"https://github.com/UncannyValle/MarioPaintSoundMachine"}
          />
          <Skills
            image={data.calcutron.childImageSharp.fluid}
            title={"Calculator App"}
            site={"https://calcutron.netlify.com"}
            text={"Just a calculator made with React"}
            tech={"React | JS | CSS | HTML | Netlify"}
            gitHub={"https://github.com/UncannyValle/calcutron"}
          />
        </SkillsWrapper>
      </SectionWrapper>
    </div>
  )
}
export default Projects
