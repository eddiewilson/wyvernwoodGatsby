import React from "react"
import { Typography, Box } from "@material-ui/core"
import bg from "../../static/images/bg2-intro@2x.png"
import mbg from "../../static/images/mbg2-intro@2x.png"
import styled from "styled-components"
import { withTheme } from "@material-ui/core/styles"

const Root = withTheme(styled.div`
  position: relative;
  .background {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-image: url(${mbg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    ${props => props.theme.breakpoints.up("sm")} {
      background-image: url(${bg});
    }
  }
`)

const Intro = props => {
  return (
    <Root>
      <div className="background"></div>
      <Box pt={6} pb={3}>
        <Typography variant={"h1"} align={"center"}>
          Aenean acdo bibendum blandit nibh. Suspendisse non commodo tellus.
          Pellentesque molestie tincidunt.
        </Typography>
      </Box>
    </Root>
  )
}

export default Intro
