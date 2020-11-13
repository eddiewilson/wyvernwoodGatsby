/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import backgroundLeaves from "../images/background-leaves.svg"
import colors from "../theme/colors"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import "./layout.css"
import theme from "../gatsby-theme-material-ui-top-layout/theme"

const BackgroundLeaves = styled.div`
  background: url(${backgroundLeaves}), ${colors.primary};
  background-size: contain;
  width: 100%;
  height: 100%;
  min-height: 3000px;
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
    <BackgroundLeaves>
      <ThemeProvider theme={theme}>
        <main>{children}</main>
      </ThemeProvider>
    </BackgroundLeaves>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
