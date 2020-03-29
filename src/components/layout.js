/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 html {
  box-sizing: content-box;
  line-height: 1.5rem;
  font-size:100%;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;

  
body {
  margin:0;
  max-width: 100vw;
}
  @media (min-width: 768px) {
    font-size: 112.5%; 
  }
 }
 h1 {
   font-size: 4rem;
   line-height: 3.5rem;
   font-family: 'Poppins' sans-serif;
 }
 h2 {
   font-size: 2rem;
   line-height:2rem;
   font-family: 'Poppins' sans-serif;
 }
 a {
  text-decoration: none;
 }
ul{
  list-style:none;
}
 a:visited {
   color: black;
 }
`

const Footer = styled.footer`
  bottom: 0;
  width: 100%;
  text-align: center;
  position: relative;
  left: 0;
`
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
        <Footer>Built by Julian Valle, © {new Date().getFullYear()}</Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
