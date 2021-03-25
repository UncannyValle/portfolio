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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Main = styled.main`
  max-width: 1366px;
  text-align: center;
  margin: 0 auto;
  min-height: 100vh;
`

const Footer = styled.footer`
  width: 100%;
  bottom: 0;
  color: white;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #7c4dff;
  @media (max-width: 768px) {
    p {
      margin: 0 1rem;
    }
  }
`
const SocialWrapper = styled.div`
  text-align: center;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a svg {
    width: 100%;
    height: 100%;
  }
  a {
    color: white;
    transition: 0.5s;
  }
  a:hover {
    transform: scale(2);
    color: cyan;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 520px) {
    width: 30%;
    flex-direction: column;
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

      <Header siteTitle={data.site.siteMetadata.title} />

      <Main>{children}</Main>

      <Footer>
        <p>The Uncanny Valle©</p> <p>|</p>
        <p> Made by Julian Valle 2020 - {new Date().getFullYear()}</p>
        <SocialWrapper>
          <a
            href="https://linkedin.com/in/uncannyvalle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/uncannyvalle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://twitter.com/theuncannyvalle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </SocialWrapper>
      </Footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
