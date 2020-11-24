/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// import BackgroundLeaves from "../components/backgroundLeaves.js"
// import backgroundLeaves from "../../static/images/background-leaves@2x.png"
// import mobileBackgroundLeaves from "../../static/images/mobile-background-leaves.svg"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import Footer from "../components/footer"

import CssBaseline from "@material-ui/core/CssBaseline"

const BackgroundColor = styled.div.attrs({ id: "background" })`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackgroundColor />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
