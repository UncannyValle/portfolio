import React from "react"
import styled from "styled-components"
import splash from "../images/splash.jpg"

const Home = () => {
  const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${splash});
    background-size: cover;
    text-align: right;
    background-position: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);..

    @media (max-width: 520px) {
      margin: 0;
      text-align: center;
    }
  `
  const TextWrap = styled.div`
    background-color: #ffffffdb;
    display: block;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding-top: 5rem;
    top: 0;
    position: absolute;
    @media (max-width: 520px) {
      width: 100%;
      position: absolute;
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
      {/* <img src={splash} alt="me drinking some atole" /> */}
      <TextWrap>
        <h1>Hi, I'm Julian!</h1>
        <h2>Web Developer</h2>
        {/* <h2>React Programmer | Freelancer | Silly Husband</h2> */}
      </TextWrap>
    </HomeWrapper>
  )
}

export default Home
