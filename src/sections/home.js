import React from "react"
import styled from "styled-components"

const Home = () => {
  const HomeWrapper = styled.div`
    position: fixed;
    top:33vh;

    @media (max-width: 520px) {
      margin: 0;
      text-align: center;
      h2 {
        font-size: 1.5rem;
        margin-left: 1rem;
      }
    }
  `
  return (
    <HomeWrapper>
      <h1>Hi, I'm Julian!</h1>
      <h2>Front End Developer</h2>
      <h2>React Programmer | Freelancer | Silly Husband</h2>
    </HomeWrapper>
  )
}

export default Home
