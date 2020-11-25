import React from "react"
import styled from "styled-components"
import { Grid, withTheme, Typography, Box } from "@material-ui/core/"
import bg from "../../static/images/bg2-intro@2x.png"
import mbg from "../../static/images/mbg2-intro@2x.png"

const Root = withTheme(styled.div`
  position: relative;
  .background {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 0;
    background-image: url(${mbg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    ${props => props.theme.breakpoints.up("sm")} {
      background-image: url(${bg});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`)

const BoxLayer = withTheme(styled(Box)`
  position: relative;
  z-index: 1;
  padding: ${props => props.theme.spacing(6)}px 0;
  margin: ${props => props.theme.spacing(-2)}px 0;
  ${props => props.theme.breakpoints.up("sm")} {
    padding: ${props => props.theme.spacing(6)}px 0;
    margin: ${props => props.theme.spacing(-2)}px 0;
  }
`)

const Intro = props => {
  return (
    <Root>
      <div className="background"></div>
      <BoxLayer>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={11} md={8}>
            <Typography variant={"h1"} align={"center"}>
              Aenean acdo bibendum blandit nib uspendisse non com modo tellu
              elle ntes que molestie tincid lorem ent.
            </Typography>
          </Grid>
        </Grid>
      </BoxLayer>
    </Root>
  )
}

export default Intro
