/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

const SEO = ({ description, image, title, article }) => {
  const { site } = useStaticQuery(query)
  const { pathname } = useLocation()

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />{" "}
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}{" "}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
    //   meta={[
    //     {
    //       name: `description`,
    //       content: seo.description,
    //     },
    //     {
    //       property: `og:title`,
    //       content: seo.title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: seo.description,
    //     },
    //     {
    //       property: `og:type`,
    //       content: isBlogPost ? `article` : `website`,
    //     },
    //     { property: "og:image:alt", content: "seo.imageAlt" },
    //     {
    //       property: "twitter:image:alt",
    //       content: seo.image,
    //     },
    //     {
    //       name: `twitter:card`,
    //       content: `summary`,
    //     },
    //     {
    //       name: `twitter:creator`,
    //       content: {twitterUsername},
    //     },
    //     {
    //       name: `twitter:title`,
    //       content: title,
    //     },

    //   ].concat(meta)}
    // />
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        defaultImage
        titleTemplate
        gitHub
        imageAlt
        linkedIn
        siteUrl
        twitter
        twitterUsername
      }
    }
  }
`
export default SEO

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
