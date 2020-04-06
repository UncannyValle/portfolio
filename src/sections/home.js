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
    background: url(${splash});
    background-size: cover;
    text-align: right;
    background-position: center; 


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
