import React from "react"
import styled from "styled-components"

const Home = () => {
  const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;

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
    hr{
      width:30%;
    }
    @media (max-width: 520px) {
      width: 100%;
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 2rem;
      }
      
    }
  `
  return (
    <HomeWrapper>
      <TextWrap>
        <h1>Hi, I'm Julian!</h1>
        <hr />
        <h2>Designer | Web Developer | Hubby</h2>
      </TextWrap>
    </HomeWrapper>
  )
}

export default Home
