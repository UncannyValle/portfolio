import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills"

import atolePic from "../images/atole_pic.png"
import videothequePic from "../images/videothequePic.png"
import dannyPic from "../images/dannyAdventurePic.png"
import moviePic from "../images/movie.png"
import markdownPic from "../images/markdownPic.png"
import styled from "styled-components"

const ProjectsWrapper = styled.div`
  background-color: black;
  color: white;
  min-height: 93vh;
  padding: 1em auto;
  h1 {
    padding: 1em 1em;
  }
`
const SkillsWrapper = styled.div`
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr;
  width: 90%;
  margin: 1em auto;
  grid-gap: 1em 1em;
  padding: 1em;
  @media only screen and (max-width: 520px) {
    grid: auto-flow / 1fr;
    padding-bottom: 2em;
  }
`

const Projects = () => (
  <Layout>
    <SEO title="Projects Page" />
    <ProjectsWrapper>
      <h1>A bit of my work</h1>
      <SkillsWrapper>
        <Skills
          image={atolePic}
          site={"https://atolemedia.com"}
          text={"A React website for a videogame studio "}
          tech={"Gatsby | React | JS | CSS | HTML"}
          gitHub={"https://github.com/UncannyValle/Atole-Media"}
        />
        <Skills
          image={videothequePic}
          site={"https://lenasvideotheque"}
          text={"A movie blog using netlify CMS"}
          tech={"Gatsby | React | JS | CSS | HTML | NetlifyCMS"}
          gitHub={"https://github.com/UncannyValle/Lena-s-Videotheque"}
        />
        <Skills
          image={dannyPic}
          site={"https://lbalvarez8.github.io/Happy-Birthday-Danny/"}
          text={
            "A JS browser game, worked in a team and helped code the gameplay"
          }
          tech={"Javascript | jQuery | CSS | HTML | Git "}
          gitHub={"https://github.com/UncannyValle/Danny-Boy"}
        />
        <Skills
          image={moviePic}
          site={"https://movie-quote-machine.netlify.com/"}
          text={
            "Project for freeCodeCamp using React and then ported to Gatsby to host in Netlify"
          }
          tech={"React | JS | CSS | HTML | Netlify"}
          gitHub={"https://github.com/UncannyValle/MovieQuote-machine"}
        />
        <Skills
          image={markdownPic}
          site={"https://mrkdw-preview-machine.netlify.com/"}
          text={"A markdown previewer using React"}
          tech={"React | JS | CSS | HTML | Netlify"}
          gitHub={"https://github.com/UncannyValle/markdown-previewer"}
        />
      </SkillsWrapper>
    </ProjectsWrapper>
  </Layout>
)
export default Projects
