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
import backgroundLeaves from "../images/background-leaves@2x.png"
import colors from "../theme/colors"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import "./layout.css"
import theme from "../gatsby-theme-material-ui-top-layout/theme"

const BackgroundLeaves = styled.div`
  background: url(${backgroundLeaves});
  background-size: contain;
  width: 100%;
  height: 100%;
  min-height: 3000px;
  position: absolute;
  z-index: 0;
`
const Wrapper = styled.div`
  background-color: #1b474d; // ${colors.primary};
  position: absolute;
  z-index: -1;
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
    <Wrapper>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BackgroundLeaves />
        <main>{children}</main>
      </ThemeProvider>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
