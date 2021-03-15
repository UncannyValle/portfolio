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

const Main = styled.main`
  max-width: 1366px;
  text-align: center;
  margin: 0 auto;
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

      <Header siteTitle={data.site.siteMetadata.title} />

      <Main>{children}</Main>

      <Footer>Built by Julian Valle, © {new Date().getFullYear()}</Footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
