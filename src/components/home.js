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
  position: relative;
  top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 520px) {
    margin: 0;
    text-align: center;
  }
`
const TextWrap = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  top: 0;
  color: white;
  hr {
    width: 30%;
  }
  h1 {
    font-size: 7rem;
  }
  h2 {
    font-size: 3rem;
    color: white;
  }
  p {
    font-size: 1.5rem;
  }
  @media (max-width: 520px) {
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
  }
  @media (max-width: 768px) {
    width: 70%;
  }
`

const Home = () => {
  return (
    <HomeWrapper>
      <TextWrap>
        <h1>Hi, I'm Julian!</h1>
        <hr />
        <h2>Technophile | Web Developer | Hubby</h2>
        <p>Thanks for visiting my portfolio!</p>
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
