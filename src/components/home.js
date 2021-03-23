import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { theme } from "../theme/globalstyle"

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 0;
    text-align: center;
    top: 25vh;
  }
  @media (max-width: 520px) {
    margin: 0;
    text-align: center;
  }
`
const TextWrap = styled.div`
  width: 100%;
  text-align: center;
  .top {
    width: 25%;
    display: flex;
  }
  .bottom {
    width: 65vw;
  }
  hr {
    width: 30%;
  }
  h1 {
    font-size: 7rem;
  }
  h2 {
    font-size: 3rem;
    color: #50c5b7;
  }
  p {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    width: 95%;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 520px) {
    width: 95%;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`
const SocialWrapper = styled.div`
  text-align: center;
  width: 30%;
  display: flex;
  margin: 2rem auto;
  justify-content: space-evenly;
  align-items: center;
  a svg {
    width: 100%;
    height: 100%;
  }
  a {
    color: white;
    transition: 0.5s;
    font-size: 50px;
  }
  a:hover {
    transform: scale(2);
    color: cyan;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 520px) {
    width: 50%;
    a {
      font-size: 40px;
    }
  }
`
const Animated = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 0 auto;
  width: 70%;
  align-items: center;
  height: 9rem;
  & > * {
    transition: all 0.1s ease-in;
    font-size: 7rem;
    font-family: ${({ theme }) => theme.font.display};
    border: none;
    background: none;
    color: white;
  }
  & > *:hover {
    transform: scale(1.5);
    color: ${({ color }) => color};
    cursor: default;
  }
`

const Home = () => {
  const [rand, setRand] = useState("uncannyCyan")

  function randomizer() {
    const keys = Object.keys(theme.colors)
    const rando = theme.colors[keys[(keys.length * Math.random()) << 0]]

    if (rando !== "#3F51B5") {
      setRand(rando)
    }
    console.log(rand)
  }

  function animateLetters(string, classword) {
    let split = string.split("").map((letter, index) => {
      return (
        <button key={index} onMouseEnter={randomizer}>
          {letter}
        </button>
      )
    })

    return (
      <Animated className={classword} color={rand}>
        {split}
      </Animated>
    )
  }

  return (
    <HomeWrapper>
      <TextWrap>
        {animateLetters("Hi,", "top")}
        {animateLetters("I'm Julian", "bottom")}
        <hr />
        <h2>Front-End Developer</h2>
      </TextWrap>
      <SocialWrapper>
        <a
          href="https://linkedin.com/in/uncannyvalle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/uncannyvalle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://twitter.com/theuncannyvalle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </SocialWrapper>
    </HomeWrapper>
  )
}

export default Home
