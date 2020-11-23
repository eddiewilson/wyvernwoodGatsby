/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import BackgroundLeaves from "../components/backgroundLeaves.js"
import backgroundLeaves from "../../static/images/background-leaves@2x.png"
import mobileBackgroundLeaves from "../../static/images/mobile-background-leaves.svg"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Footer from "../components/footer"

import CssBaseline from "@material-ui/core/CssBaseline"

const Layout = ({ children }) => {
  const backgroundImage =
    useMediaQuery(theme => theme.breakpoints.up("sm")) === true
      ? backgroundLeaves
      : mobileBackgroundLeaves

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackgroundLeaves background={backgroundImage} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
