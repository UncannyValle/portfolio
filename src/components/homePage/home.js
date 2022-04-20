import React from "react"
import styled from "styled-components"
import { animated, useTrail, config } from "react-spring"

const items = [
  { text: "Welcome", id: 1 },
  { text: "To My Portfolio!", id: 2 },
  { text: "I'm Julian", id: 3 },
]
const items2 = [
  { text: "Front-End Developer", id: 1 },
  {
    text: `I'm Julian, I am a Front End developer
        specializing in creating fast, responsive and accessible sites that everyone can marvel at. My mantra is,
        "Never stop learning"`,
    id: 2,
  },
  {
    text: `If you are in need of help with your next website, hit me up. I am
        always happy to help out and collaborate with cool, like minded people.`,
    id: 3,
  },
]

const Home = () => {
  const trail = useTrail(items.length, {
    opacity: 1,
    right: "0vw",
    config: config.slow,
    from: {
      opacity: 0,
      right: "100vw",
      overflow: "hidden",
    },
  })
  const trail2 = useTrail(items2.length, {
    opacity: 1,
    left: "0vw",
    config: config.slow,
    from: {
      opacity: 0,
      left: "100vw",
      overflow: "hidden",
    },
  })

  // }

  return (
    <SplashContainer className="spash-container">
      {trail.map((props, i) => (
        <AnimatedTop style={props} key={i}>
          {items[i].text}
        </AnimatedTop>
      ))}

      {trail2.map((props, i) => {
        if (i === 0) {
          return (
            <AnimatedBottomTitle style={props} key={i}>
              {items2[i].text}
            </AnimatedBottomTitle>
          )
        } else
          return (
            <AnimatedBottomText style={props} key={i}>
              {items2[i].text}
            </AnimatedBottomText>
          )
      })}
    </SplashContainer>
  )
}
const SplashContainer = styled.div`
  min-height: calc(100vh - 4rem);
  padding: 2rem;
`
const AnimatedTop = styled(animated.h1)`
  text-align: left;
  height: auto;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 512px) {
    margin-top: 3vh;
    font-size: 2.5rem;
  }
`
const AnimatedBottomTitle = styled(animated.h2)`
  text-align: right;
  position: relative;
  color: var(--pink);
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 512px) {
    font-size: 2rem;
  }
`
const AnimatedBottomText = styled(animated.p)`
  font-size: 1.2rem;
  color: white;
  position: relative;
  width: 50%;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 512px) {
    margin-top: 3vh;
    font-size: 1rem;
  }
`

export default Home
