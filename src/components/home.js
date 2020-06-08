import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Home = () => {
  const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
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
    color: #2c26ff;
    hr {
      width: 30%;
    }
    @media (max-width: 520px) {
      width: 80%;
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  `
  const SocialWrapper = styled.div`
    text-align: center;
    width: 25%;
    height: 5rem;
    display: flex;
    margin: 0 auto;
    justify-content: space-evenly;
    a {
      color: black;
      font-size: 3rem;
      transition: 0.5s;
      padding-top:1.5rem;
      width:33%;
      height:auto;
    }
    a:hover {
      color: #2c26ff;
      font-size: 5rem;
      padding-top: 0;
    }
    @media (max-width: 520px) {
     width: 60%;
    }
  `
  return (
    <HomeWrapper>
      <TextWrap>
        <h1>Hi, I'm Julian!</h1>
        <hr />
        <h2>Designer | Web Developer | Hubby</h2>
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
