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
  max-width: 100vw;
body {
  margin:0;
}
  @media (min-width: 768px) {
    font-size: 112.5%; 
  }
 }
 h1 {
   font-size: 4rem;
 }
 h2 {
   font-size: 3rem;
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
  bottom: 1vh;
  width: 100vw;
  text-align: center;
  position: absolute;
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
