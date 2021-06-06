import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./navbar/header"
import styled from "styled-components"
import { Linkedin } from "@styled-icons/bootstrap/Linkedin"
import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare"
import { LogoInstagram } from "@styled-icons/ionicons-solid/LogoInstagram"
import { TwitterSquare } from "@styled-icons/fa-brands"

const Main = styled.main`
  max-width: 1366px;
  margin: 12vh auto 0 auto;
`

const Footer = styled.footer`
  width: 100%;
  color: white;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #7c4dff;
  position: absolute;
  bottom: 0;
  a {
    color: white;
    transition: all 0.2s ease-in;
  }

  .text {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  a:hover {
    color: var(--pink);
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 520px) {
    height: 7rem;
    .text {
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 1rem;
      height: 100%;
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
    width: 20%;
  }
  a {
    color: white;
    transition: 0.5s;
  }
  a:hover {
    color: cyan;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 520px) {
    width: 40%;
    height: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    a {
      height: 50%;
      padding: 1rem;
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
        <div className="text">
          <a href="mailto:julianv@atolemedia.com">
            Made by Julian Valle {new Date().getFullYear()}
          </a>
        </div>
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
