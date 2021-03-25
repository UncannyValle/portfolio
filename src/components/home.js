import React from "react"
import styled from "styled-components"

import "@fortawesome/fontawesome-svg-core/styles.css"

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  position: relative;
  top: 12vh;

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
    width: 20vw;
    h1 {
      font-size: 3rem;
    }
  }
  .middle {
    width: 70vw;
    h1 {
      font-size: 3.5rem;
    }
  }
  .bottom {
    width: 40vw;
    h1 {
      font-size: 5rem;
    }
  }
  hr {
    width: 50%;
    margin: 1.5rem auto;
  }
  .front {
    margin: 1rem auto;
  }
  h1 {
    font-size: 5rem;
    transition: all 0.3s ease-in;
    width: 5rem;
    font-family: ${({ theme }) => theme.font.display};

    color: white;
    display: block;
  }
  h2 {
    font-size: 3rem;
    color: #50c5b7;
  }
  p {
    font-size: 1.2rem;
    color: white;
    text-align: left;
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 95%;
    .top {
      h1 {
        font-size: 1.5rem;
      }
    }
    .middle {
      h1 {
        font-size: 1rem;
      }
    }
    .bottom {
      h1 {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1rem;
      width: 90vw;
    }
  }
  @media (max-width: 768px) {
    width: 95%;
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    .top {
      width: 30vw;
      h1 {
        font-size: 2.5rem;
      }
    }
    .bottom {
      width: 50vw;
      h1 {
        font-size: 2.5rem;
      }
    }
    .middle {
      width: 75vw;
      h1 {
        font-size: 2rem;
      }
    }
  }
`

const Animated = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 0 auto;
  width: 90%;
  align-items: center;
  height: auto;
  & > * {
  }
  & > *:hover {
    transform: scale(1.5);
    color: ${({ theme }) => theme.colors.cyan};
    cursor: default;
  }
`

const Home = () => {
  function animateLetters(string, classword) {
    let split = string.split("").map((letter, index) => {
      return <h1 key={index}>{letter}</h1>
    })

    return <Animated className={classword}>{split}</Animated>
  }

  return (
    <HomeWrapper>
      <TextWrap>
        {animateLetters("Welcome", "top")}
        {animateLetters("to the Uncanny Valle", "middle")}
        {animateLetters("I'm Julian", "bottom")}
        <hr />
        <h2 className="front">Front-End Developer</h2>
        <p>
          I'm Julian,I am a self taught developer and tech support specialist
          specializing in creating fast and cutting edge sites using the latest
          Javascript tools. I'm a creative and passionate guy who's mantra is,
          "Never stop learning." If you are in need of help with your next web
          project, hit me up. I am always happy to help out on new or ongoing
          projects and collaborate with like minded people.
        </p>
      </TextWrap>
    </HomeWrapper>
  )
}

export default Home
