import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

// CSS
const IndexWrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 520px){
    heigth:auto;
  }
`
const Home = styled.div`
margin-left: 3rem;
  @media only screen and (max-width: 520px) {
    margin:0;
    h2{
      font-size: 1.5rem;
      margin-left: 1rem;
    }

  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexWrapper>
      <Home>
        <h1>Hi, I'm Julian!</h1>
        <h2>Front End Developer</h2>
        <h2>React Programmer | Freelancer | Silly Husband</h2>
      </Home>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
