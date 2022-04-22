import React from "react"
import styled from "styled-components"
import Title from "./title"
import SectionWrapper from "./sectionWrapper"

const About = (props) => {
  return (
    <AboutSection id="about">
      <Title>A bit about me...</Title>
      <AboutWrapper>
        <p className="text">
          I'm a self taught developer who started his coding journey in 2017.
          From there I slowly taught myself front end development with React,
          Gatsby and Sass. I even learned a bit of OOP with Java and mySQL.
        </p>{" "}
        <p className="text">
          {" "}
          In 2021 I was lucky enough to start working full time as a Front End
          developer for Enovational. There I quickly learned Vue.js, Ruby on
          Rails, and Bootstrap. More importantly, I learned how to work on a
          development team with an existing codebase as well as how to
          communicate with the design and product team to bring prototypes to
          life.{" "}
        </p>{" "}
        <p className="text">
          I am always learning and looking for my next opportunity, hit me up if
          you would like to collaborate or just chat. Always happy to help those
          in their own personal coding journey.
        </p>
        <ul className="fact-list">
          <li className="facts">
            🧠  I'm learning Next.js, Node.js and Python. Pretty much I want to
            master the fullstack!
          </li>
          <li className="facts">
            🤝  I'm open to collaborating on creative endeavors, video games,
            and someone please explain to me Web3.0 haha.
          </li>

          <li className="facts">
            ⚡  Love to explore the city with my wife, eat tacos, and have long
            winded conversations about psychology.
          </li>
        </ul>
        <h3 className="title">Skills</h3>
        <div className="skills">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
              width="50"
              height="50"
              alt="Javascript"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
              width="50"
              height="50"
              alt="Typescript"
            />
          </a>
          <a
            href="https://www.ruby-lang.org/en/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ruby-colored.svg"
              width="50"
              height="50"
              alt="Ruby"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
              width="50"
              height="50"
              alt="HTML5"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
              width="50"
              height="50"
              alt="React"
            />
          </a>
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs.svg"
              width="50"
              height="50"
              alt="NextJs"
            />
          </a>
          <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
              width="50"
              height="50"
              alt="Vue"
            />
          </a>
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg"
              width="50"
              height="50"
              alt="Gatsby"
            />
          </a>
          <a
            href="https://www.w3.org/TR/CSS/#css"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
              width="50"
              height="50"
              alt="CSS3"
            />
          </a>
          <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
              width="50"
              height="50"
              alt="Sass"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
              width="50"
              height="50"
              alt="TailwindCSS"
            />
          </a>
          <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
              width="50"
              height="50"
              alt="Bootstrap"
            />
          </a>
          <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
              width="50"
              height="50"
              alt="Redux"
            />
          </a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
              width="50"
              height="50"
              alt="NodeJS"
            />
          </a>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express.svg"
              width="50"
              height="50"
              alt="Express"
            />
          </a>
          <a href="https://graphql.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
              width="50"
              height="50"
              alt="GraphQL"
            />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
              width="50"
              height="50"
              alt="MongoDB"
            />
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
              width="50"
              height="50"
              alt="MySQL"
            />
          </a>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
              alt="PostgreSQL"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
              width="50"
              height="50"
              alt="Firebase"
            />
          </a>
          <a
            href="https://www.adobe.com/uk/products/photoshop.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg"
              width="50"
              height="50"
              alt="Photoshop"
            />
          </a>
          <a
            href="https://www.adobe.com/uk/products/premiere.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/premierepro.svg"
              width="50"
              height="50"
              alt="Premiere Pro"
            />
          </a>
          <a
            href="https://www.adobe.com/uk/products/xd.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/xd-colored.svg"
              width="50"
              height="50"
              alt="XD"
            />
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
              width="50"
              height="50"
              alt="Figma"
            />
          </a>
        </div>
        <h2 className="title">My GitHub Stats</h2>
        <a
          href="http://www.github.com/uncannyvalle"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github"
            src="https://github-readme-stats.vercel.app/api?username=uncannyvalle&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&show_icons=true"
            alt="uncannyvalle's GitHub stats"
          />
        </a>
      </AboutWrapper>
    </AboutSection>
  )
}

const AboutSection = styled(SectionWrapper)`
  .title {
    font-size: 2.5rem;
    color: var(--pink);
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
`

const AboutWrapper = styled.div`
  height: auto;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  .title {
    font-size: 2.5rem;
    color: var(--pink);
  }
  .text {
    font-size: 1.25rem;
    color: white;
    padding: 1rem;
  }
  .facts {
    color: white;
    text-align: left;
    padding: 0.5rem 5rem;
    font-size: 1.25rem;
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
    a {
      transition: all 200ms ease-in;
    }
    a:hover {
      transform: scale(1.5);
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    .text {
    }

    .skills {
    }
  }
  @media (max-width: 512px) {
    .skills {
      grid-template-columns: repeat(3, 1fr);
    }
    .github {
      width: 90%;
    }
    .facts {
      padding: 0.5rem 1.5rem;
    }
  }
`

export default About
