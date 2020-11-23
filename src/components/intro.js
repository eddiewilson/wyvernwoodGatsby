import React from "react"
import { Typography, Box } from "@material-ui/core"
import bg from "../../static/images/bg2-intro@2x.png"
import mbg from "../../static/images/mbg2-intro@2x.png"
import styled from "styled-components"

const Root = styled.div`
  position: relative;
  .background {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media only screen and (max-width: 600px) {
    background-image: url(${mbg});
  }
`

const Intro = () => {
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
