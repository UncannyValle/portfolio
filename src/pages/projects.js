import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./projects.module.css"
import Skills from "../components/skills"

import atolePic from "../images/atole_pic.png"
import videothequePic from "../images/videothequePic.png"
import dannyPic from "../images/dannyAdventurePic.png"
import moviePic from "../images/movie.png"
import markdownPic from "../images/markdownPic.png"

const Projects = () => (
  <Layout>
    <SEO title="Projects Page" />
    <div className={styles.projects}>
      <h1>A bit of my work</h1>
      <div className={styles.skillsWrapper}>
        <Skills
          image={atolePic}
          site={"https://atolemedia.com"}
          text={"A React website for a videogame studio "}
          tech={"Gatsby | React | JS | CSS | HTML"}
          gitHub={"https://github.com/UncannyValle/Atole-Media"}
        />
        <Skills
          image={videothequePic}
          site={"https://lenasvideotheque.com"}
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
          text={
            "A markdown previewer using React"
          }
          tech={"React | JS | CSS | HTML | Netlify"}
          gitHub={"https://github.com/UncannyValle/markdown-previewer"}
        />
      </div>
    </div>
  </Layout>
)
export default Projects
