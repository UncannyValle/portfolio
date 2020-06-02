/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import styled from "styled-components"

// start of global styles
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const theme = {
  font: {
    title: "Titillium Web, sans-serif",
    text: "Roboto, sans-serif",
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.text}
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    height:auto;
  }
  h1{
    font-family: ${({ theme }) => theme.font.title};
    font-size: 5rem;
     color: #2c26ff;

  }
  h2{
    font-family: ${({ theme }) => theme.font.title};
    font-size: 2rem;
    color: #2c26ff;
  }
  a {
    text-decoration: none ;
    color:black;
    font-family: ${({ theme }) => theme.font.title};
    font-size:1.3rem;

 }  
`

// end of global styles

const BodyWrapper = styled.div`
  background-color: #ffffff;

`

const Main = styled.main`
  position: relative;
  top: 10vh;
  height: 100%;
  max-width: 1366px;
  margin: 0 auto;
  text-align:center;

`

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  left: 0;
  padding: 1rem 0;
  position: relative;
  color: black;
  @media (max-width: 520px) {
    margin: 0;
    color: black;
    padding: 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <BodyWrapper>
    <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />

      <Main>{children}</Main>

      <Footer>Built by Julian Valle, © {new Date().getFullYear()}</Footer>
    </BodyWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
