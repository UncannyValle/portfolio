import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

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
  color: #303f9f;
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
    color: white;
  }
  h2 {
    font-size: 3rem;
    color: cyan;
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
  & > * {
    transition: all 0.1s ease-in;
  }
  & > *:hover {
    transform: scale(1.5);
    color: cyan;
    cursor: default;
  }
`
function animateLetters(string, classword) {
  let split = string.split("").map((letter, index) => {
    return <h1 key={index}>{letter}</h1>
  })
  return <Animated className={classword}>{split}</Animated>
}

const Home = () => {
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
