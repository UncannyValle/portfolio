import React from "react"
import SEO from "./seo"
import Skills from "./skills"
import Title from "./title"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import SectionWrapper from "./sectionWrapper"

const SkillsWrapper = styled.div`
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr;
  width: 90%;
  grid-gap: 1em 1em;
  margin: 0 auto;
  @media only screen and (max-width: 520px) {
    grid: auto-flow / 1fr;
    padding-bottom: 2em;
  }
`

const Projects = props => {
  const data = useStaticQuery(graphql`
  {
    calcutron:file(relativePath:{eq:"calcutron.png"}){
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    atole:file(relativePath:{eq:"atole_pic.png"}){
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    markdown:file(relativePath:{eq:"markdownPic.png"}){
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    movie:file(relativePath:{eq:"movie.png"}){
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mario:file(relativePath:{eq:"mp-image.png"}){
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    danny:file(relativePath:{eq:"dannyAdventurePic.png"}){
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
      <SEO title="Projects Page" />
      <SectionWrapper>
        <Title>A bit of my work</Title>
        <SkillsWrapper>
          <Skills
            image={data.atole.childImageSharp.fluid}
            site={"https://atolemedia.com"}
            text={"A Wordpress website for a videogame studio "}
            tech={"Wordpress | JS | CSS | PHP"}
            gitHub={"https://github.com/UncannyValle/Atole-Media"}
          />
          {/* <Skills
          image={videothequePic}
          site={"https://lenasvideotheque"}
          text={"A movie blog using netlify CMS"}
          tech={"Gatsby | React | JS | CSS | HTML | NetlifyCMS"}
          gitHub={"https://github.com/UncannyValle/Lena-s-Videotheque"}
        /> */}
          <Skills
            image={data.danny.childImageSharp.fluid}
            site={"https://lbalvarez8.github.io/Happy-Birthday-Danny/"}
            text={
              "A JS browser game, worked in a team and helped code the gameplay"
            }
            tech={"Javascript | jQuery | CSS | HTML | Git "}
            gitHub={"https://github.com/UncannyValle/Danny-Boy"}
          />
          <Skills
            image={data.movie.childImageSharp.fluid}
            site={"https://movie-quote-machine.netlify.com/"}
            text={
              "Project for freeCodeCamp using React and then ported to Gatsby to host in Netlify"
            }
            tech={"React | JS | CSS | HTML | Netlify"}
            gitHub={"https://github.com/UncannyValle/MovieQuote-machine"}
          />
          <Skills
            image={data.markdown.childImageSharp.fluid}
            site={"https://mrkdw-preview-machine.netlify.com/"}
            text={"A markdown previewer using React"}
            tech={"React | JS | CSS | HTML | Netlify"}
            gitHub={"https://github.com/UncannyValle/markdown-previewer"}
          />
          <Skills
            image={data.mario.childImageSharp.fluid}
            site={"https://mp-soundmaker.netlify.com"}
            text={"A fun little sound tester"}
            tech={"React | JS | CSS | HTML | Netlify"}
            gitHub={"https://github.com/UncannyValle/MarioPaintSoundMachine"}
          />
          <Skills
            image={data.calcutron.childImageSharp.fluid}
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
