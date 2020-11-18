/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import BackgroundLeaves from "../components/backgroundLeaves.js"
import backgroundLeaves from "../images/background-leaves@2x.png"
import mobileBackgroundLeaves from "../images/mobile-background-leaves.svg"
import { jssPreset, StylesProvider } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { create } from "jss"
import jssTemplate from "jss-plugin-template"

import CssBaseline from "@material-ui/core/CssBaseline"

const jss = create({
  plugins: [jssTemplate(), ...jssPreset().plugins],
})

const Layout = ({ children }) => {
  const backgroundImage =
    useMediaQuery(theme => theme.breakpoints.up("sm")) === true
      ? backgroundLeaves
      : mobileBackgroundLeaves

  return (
    <StylesProvider jss={jss}>
      <CssBaseline />
      <BackgroundLeaves background={backgroundImage} />
      <main>{children}</main>
    </StylesProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
