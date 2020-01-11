import React from "react"
import styles from "./about.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import selfie from "../images/selfie.jpg"

const About = () => (
  <Layout >
    <SEO title="About me" />
    <div className={styles.content}>
      <h1>A bit about me...</h1>
      <div className={styles.about_wrapper}>
        <img src={selfie} alt="Me!"></img>

        <p>
          I'm Julian Valle, a Front-End Web Developer who loves to make creative, responsive and functional websites for small businesses and beyond! I am a self taught developer who is constantly
          learning new ways to solve everyday problems using code. <br/> I work mostly using Javascript (React, Gatsby), HTML and CSS(Sass, CSS Modules) but I am always learning new technologies and staying up to date. <br/>I also have a background in Psychology, I am a great team player, always there to help out the client, and I make extremely delicious tacos!
        </p>
      </div>
    </div>
  </Layout>
)

export default About
