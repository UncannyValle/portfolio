import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./navbar/header"
import styled from "styled-components"
import { Linkedin } from "@styled-icons/bootstrap/Linkedin"
import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare"
import { LogoInstagram } from "@styled-icons/ionicons-solid/LogoInstagram"
import { TwitterSquare } from "@styled-icons/fa-brands"
import { StyledIconBase } from "@styled-icons/styled-icon"

const Main = styled.main`
  max-width: 1080px;
  width: 100%;
  margin: 4rem auto 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  @media (max-width: 512px) {
    padding: 1rem;
  }
`

const Footer = styled.footer`
  width: 100%;
  color: white;
  height: 75px;
  display: flex;
  background-color: var(--black);
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  padding: 0 1rem;

  a {
    color: white;
    transition: all 0.2s ease-in;
  }

  a:hover {
    color: var(--pink);
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 512px) {
    height: 5rem;
    justify-content: space-between;
    .text {
      font-size: 0.75rem;
    }
  }
`
const SocialWrapper = styled.div`
  text-align: center;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${StyledIconBase} {
    width: 2rem;
    @media (max-width: 512px) {
      width: 1rem;
    }
  }

  a {
    color: white;
    transition: 0.5s;
    display: flex;
    align-items: center;
  }
  a:hover {
    color: var(--cyan);
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 520px) {
    height: 100%;
    a {
      height: 50%;
    }
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <Main>{children}</Main>

      <Footer>
        <a className="text" href="mailto:julianv@atolemedia.com">
          Made by Julian Valle {new Date().getFullYear()}
        </a>

        <SocialWrapper>
          <a
            href="https://linkedin.com/in/uncannyvalle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Linkedin />
          </a>
          <a
            href="https://github.com/uncannyvalle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <GithubSquare />
          </a>
          <a
            href="https://www.instagram.com/the_unncanny_valle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <LogoInstagram />
          </a>
          <a
            href="https://twitter.com/theuncannyvalle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <TwitterSquare />
          </a>
        </SocialWrapper>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
