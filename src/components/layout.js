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
import { GlobalStyle, theme } from "../theme/globalstyle"
import { ThemeProvider } from "styled-components"

const BodyWrapper = styled.div`
  background-color: #3f51b5;
  position: relative;
`

const Main = styled.main`
  max-width: 1366px;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  padding-top: 13vh;
  padding-bottom: 3.5rem;
`

const Footer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: white;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BodyWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />

        <Main>{children}</Main>

        <Footer>Built by Julian Valle, © {new Date().getFullYear()}</Footer>
      </BodyWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
