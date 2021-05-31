import React from "react"
import Skills from "./skills"
import Title from "./title"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import SectionWrapper from "./sectionWrapper"

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

const Projects = (props) => {
  return (
    <div id={props.id}>
      <SectionWrapper>
        <Title>A bit of my work</Title>
        <SkillsWrapper>
          <Skills
            image={
              <StaticImage src="../images/atole_pic.png" alt="atole site" />
            }
            title={"Atole Blog"}
            site={"https://atolemedia.com"}
            text={"A Blog website for game and movie reviews"}
            tech={"React | JS | CSS | GraphQl"}
            gitHub={"https://github.com/UncannyValle/AtoleMedia"}
          />
          <Skills
            image={<StaticImage src="../images/sapa.jpg" alt="ecomerce site" />}
            title={"Sapa Fashion Store"}
            site={"https://sapa-fashion.netlify.app/"}
            text={"An Ecomerce Site Using Shopify"}
            tech={"Gatsby | React | JS | GraphQl | Shopify"}
            gitHub={"https://github.com/UncannyValle/Sapa-fashion"}
          />
          <Skills
            image={
              <StaticImage src="../images/avocado.jpg" alt="avocado clock" />
            }
            title={"Avocado Clock"}
            site={"https://avocadoclock.netlify.com/"}
            text={"An anti procrastination timer using react"}
            tech={"React | JS | XML | CSS"}
            gitHub={"https://github.com/UncannyValle/Avocado-Clock"}
          />

          <Skills
            image={
              <StaticImage
                src="../images/movie.png"
                alt="movie quote machine"
              />
            }
            title={"Movie Quoter"}
            site={"https://movie-quote-machine.netlify.com/"}
            text={"Built in React, uses an external API to access data"}
            tech={"React | JS | CSS | HTML | Netlify"}
            gitHub={"https://github.com/UncannyValle/MovieQuote-machine"}
          />

          <Skills
            image={
              <StaticImage src="../images/mario.jpg" alt="mario drummer" />
            }
            title={"Mario Drum Machine"}
            site={"https://mp-soundmaker.netlify.com"}
            text={"A sound tester with the music of Mario Paint"}
            tech={"React | JS | CSS | HTML | Netlify"}
            gitHub={"https://github.com/UncannyValle/MarioPaintSoundMachine"}
          />
          <Skills
            image={
              <StaticImage src="../images/calcutron.png" alt="calculator app" />
            }
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
