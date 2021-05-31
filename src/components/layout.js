import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./navbar/header"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Main = styled.main`
  max-width: 1366px;
  margin-top: 12vh;
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
    color: cyan;
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.3);
    }
  }
  .text {
    width: 50%;
    display: flex;
    justify-content: space-between;
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
          <a href="mailto:julianv@atolemedia.com">The Uncanny Valle© </a>
          <p> Made by Julian Valle 2020 - {new Date().getFullYear()}</p>
        </div>
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
            href="https://www.instagram.com/the_unncanny_valle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
