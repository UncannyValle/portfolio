import React from "react"
import styled from "styled-components"
import { animated, useSpring, useTrail } from "react-spring"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { useState } from "react"
import { AsyncMode } from "react-is"

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  margin: 12vh auto 5rem auto;

  @media (max-width: 768px) {
    text-align: center;
    top: 25vh;
  }
  @media (max-width: 520px) {
    text-align: center;
  }
`
const TextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  text-align: center;
  .top {
    h1 {
      font-size: 3rem;
    }
  }
  .middle {
    h1 {
      font-size: 3.5rem;
    }
  }
  .bottom {
    h1 {
      font-size: 5rem;

      font-family: ${({ theme }) => theme.font.display};
    }
  }
  hr {
    margin: 1.5rem auto;
  }
  .front {
    margin: 0 2rem;
    align-self: flex-end;
  }
  h1 {
    transition: all 0.3s ease-in;

    display: block;
  }

  p {
    font-size: 1.2rem;
    color: white;
    text-align: right;
    width: 70%;
    margin: 0 2rem;
  }
  @media (max-width: 768px) {
    width: 95%;
    .top {
      h1 {
        font-size: 3.5rem;
      }
    }
    .middle {
      h1 {
        font-size: 2.5rem;
      }
    }
    .bottom {
      h1 {
        font-size: 3rem;
      }
    }
    p {
      font-size: 1.5rem;
      width: 90vw;
    }
  }
  @media (max-width: 520px) {
    width: 95%;

    .top {
      width: 30vw;
      h1 {
        font-size: 2rem;
      }
    }
    .bottom {
      width: 50vw;
      h1 {
        font-size: 1.7rem;
      }
    }
    .middle {
      width: 75vw;
      h1 {
        font-size: 1.3rem;
      }
    }
    .front {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
      width: 90%;
    }
  }
`

const Animated = styled.h1`
  align-self: flex-start;
  margin: 0 2rem 2rem;
  text-align: left;
  height: auto;
  span {
    transition: all ease-in 0.2s;
    display: inline-block;
    min-width: 1rem;
  }
  span:hover {
    transform: scale(1.5);
    color: ${({ theme }) => theme.colors.cyan};
    cursor: default;
  }
`

const items = [
  { text: "Welcome", id: 1 },
  { text: "To My Portfolio!", id: 2 },
  { text: "I'm Julian", id: 3 },
]

const Home = () => {
  const trail = useTrail(items.length, { opacity: 1, from: { opacity: 0 } })

  // function animateLetters(string, classword) {
  //   let split = string.split("").map((letter, index) => {
  //     return <span key={index}>{letter} </span>
  //   })
  //   return <Animated className={classword}>{split}</Animated>
  // }

  return (
    <HomeWrapper>
      <TextWrap>
        {trail.map((props, i) => (
          <Animated style={props} key={i}>
            {items[i].text}
          </Animated>
        ))}

        {/* <Animated open={open}>
          <h1>Welcome</h1>
          <h1>To My Portfolio</h1>
          <h1>I'm Julian</h1>
        </Animated> */}
        {/* {animateLetters(text[1], "middle")}
        {animateLetters(text[2], "bottom")} */}
        <h2 className="front">Front-End Developer</h2>
        <p>
          I'm Julian, I am a self taught developer and tech support specialist
          specializing in creating fast and cutting edge sites using the latest
          Javascript tools. I'm a creative and passionate guy who's mantra is,
          "Never stop learning."
          <br /> <br />
          If you are in need of help with your next web project, hit me up. I am
          always happy to help out on new or ongoing projects and collaborate
          with like minded people.
        </p>
      </TextWrap>
    </HomeWrapper>
  )
}

export default Home
