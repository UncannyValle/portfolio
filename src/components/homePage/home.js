import React from "react"
import styled from "styled-components"
import { animated, useTrail } from "react-spring"

import "@fortawesome/fontawesome-svg-core/styles.css"

const HomeWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 5rem;

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
  h2 {
    margin: 2rem;
    text-align: right;
    position: relative;
  }

  p {
    font-size: 1.2rem;
    color: white;
    text-align: right;
    width: 70%;
    margin: 2rem 0 2rem auto;
    position: relative;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.5rem;
      width: 90vw;
    }
  }
  @media (max-width: 520px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`

const Animated = styled(animated.h1)`
  text-align: left;
  height: auto;
  position: relative;
  @media (max-width: 512px) {
    margin-top: 3vh;
  }
`

const items = [
  { text: "Welcome", id: 1 },
  { text: "To My Portfolio!", id: 2 },
  { text: "I'm Julian", id: 3 },
]
const items2 = [
  { text: "Front-End Developer", id: 1 },
  {
    text: `I'm Julian, I am a self taught developer and tech support specialist
        specializing in creating fast and cutting edge sites using the latest
        Javascript tools. I'm a creative and passionate guy who's mantra is,
        "Never stop learning."`,
    id: 2,
  },
  {
    text: `If you are in need of help with your next web project, hit me up. I am
        always happy to help out on new or ongoing projects and collaborate with
        like minded people.`,
    id: 3,
  },
]

const Home = () => {
  const trail = useTrail(items.length, {
    opacity: 1,
    right: "0vw",
    from: {
      opacity: 0,
      right: "100vw",
    },
  })
  const trail2 = useTrail(items2.length, {
    opacity: 1,
    left: "0vw",
    from: {
      opacity: 0,
      left: "100vw",
    },
  })

  // }

  return (
    <HomeWrapper>
      {trail.map((props, i) => (
        <Animated style={props} key={i}>
          {items[i].text}
        </Animated>
      ))}
      {trail2.map((props, i) => {
        if (i === 0) {
          return (
            <animated.h2 style={props} key={i}>
              {items2[i].text}
            </animated.h2>
          )
        } else
          return (
            <animated.p style={props} key={i}>
              {items2[i].text}
            </animated.p>
          )
      })}
    </HomeWrapper>
  )
}

export default Home
