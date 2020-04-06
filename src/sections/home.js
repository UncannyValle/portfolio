import React from "react"
import styled from "styled-components"
import splash from "../images/splash.jpg"

const Home = () => {
  const HomeWrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    height: 100vh;
    color: #364399;
    padding-top: 30vh;
    background: url(${splash});
    background-size: cover;
    text-align: right;

    @media (max-width: 520px) {
      margin: 0;
      text-align: center;
    }
  `
  const TextWrap = styled.div`
    background-color: #ffffffdb;
    display: block;
    width: 50%;
    text-align: center;
    margin: 0 0 0 auto;
    padding: 1.5rem;
    @media (max-width: 520px) {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  `
  return (
    <HomeWrapper>
      <TextWrap>
        <h1>Hi, I'm Julian!</h1>
        <h2>Web Developer</h2>
        {/* <h2>React Programmer | Freelancer | Silly Husband</h2> */}
      </TextWrap>
    </HomeWrapper>
  )
}

export default Home
