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
import timelapse from "../videos/street.mp4"

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

      <Main>
        <VideoBackground autoPlay={true} loop={true} playsInline={true}>
          <source src={timelapse} type="video/mp4" />
        </VideoBackground>
        <div className="content">{children}</div>
      </Main>

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

const Main = styled.main`
  background-color: rgba(12, 32, 69, 0.75);
  position: relative;
  padding-bottom: 100px;
  .content {
    max-width: 1024px;
    width: 100%;
    margin: 75px auto 0 auto;
    min-height: calc(100vh - 175px);
  }
`
const VideoBackground = styled.video`
  position: fixed;
  height: 130vh;
  left: 0;
  top: 0;
  z-index: -10;
`

const Footer = styled.footer`
  width: 100%;
  color: white;
  height: 100px;
  display: flex;
  background-color: var(--black);
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  a {
    color: white;
    transition: all 0.2s ease-in;
  }

  a:hover {
    color: var(--pink);
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 520px) {
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    .text {
      font-size: 1rem;
      width: 100%;
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
  }

  a {
    color: white;
    transition: 0.5s;
    display: flex;
    align-items: center;
  }
  a:hover {
    color: cyan;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 520px) {
    a {
      height: 50%;
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
