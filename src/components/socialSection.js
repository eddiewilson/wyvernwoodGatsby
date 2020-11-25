import React from "react"
import styled from "styled-components"
import { Typography, Box, Grid, SvgIcon, withTheme } from "@material-ui/core"
import FacebookLogo from "../../static/svgs/inline/icon_facebook.svg"
import InstagramLogo from "../../static/svgs/inline/icon_instagram.inline.svg"
import YouTubeLogo from "../../static/svgs/inline/icon_YouTube.inline.svg"
import bg from "../../static/images/bg-4-social@2x.png"
import mbg from "../../static/images/mbg4-social@2x.png"

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
    background-position: ${props => props.theme.spacing(0)}px
      ${props => props.theme.spacing(3)}px;
    background-size: contain;
    background-repeat: no-repeat;
    transform: scaleX(1);
    ${props => props.theme.breakpoints.up("sm")} {
      transform: scaleX(1);
      background-position: ${props => props.theme.spacing(1)}px
        ${props => props.theme.spacing(1)}px;
      background-image: url(${bg});
    }
  }
`)

const SocialLinks = withTheme(styled.div`
  display: flex;
  flex-direction: row;
  a {
    transition: all 0.2s ease-in-out 0s;
    svg {
      width: 40px;
      height: 40px;
      path {
        fill: ${props => props.theme.palette.secondary.main};
      }
    }
    &:hover {
      path {
        fill: white;
      }
    }
  }
`)

const BoxLayer = withTheme(styled(Box)`
  position: relative;
  z-index: 1;
  padding-bottom: ${props => props.theme.spacing(1)}px;
  ${props => props.theme.breakpoints.up("sm")} {
    padding-bottom: ${props => props.theme.spacing(6)}px;
  }
`)

const IconsWrapper = withTheme(styled(Box).attrs({ className: "IconsWrapper" })`
  margin: ${props => props.theme.spacing(2)}px 0;
  ${props => props.theme.breakpoints.up("sm")} {
    margin: ${props => props.theme.spacing(2)}px 0;
  }
`)

const SocialSection = props => {
  return (
    <Root>
      <div className="background"></div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={11} md={6}>
          <BoxLayer my={4}>
            <Box mb={2}>
              <Typography variant={"h2"} align={"center"}>
                Follow Our Story So Far On Social.
              </Typography>
            </Box>
            <Typography variant={"body1"} align={"center"}>
              Quisque bibendum blandit nibh. Suspendi sse non commodo tellus. Ut
              pellentesque molestie tincidunt. Duis eget felis ligula.
            </Typography>
            <IconsWrapper my={3}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <SocialLinks>
                  <Box component="span" mx={1}>
                    <a href="social.com">
                      <SvgIcon component={FacebookLogo} viewBox="0 0 40 40" />
                    </a>
                  </Box>
                  <Box component="span" mx={1}>
                    <a href="social.com">
                      {" "}
                      <SvgIcon component={InstagramLogo} viewBox="0 0 40 40" />
                    </a>
                  </Box>
                  <Box component="span" mx={1}>
                    <a href="social.com">
                      {" "}
                      <SvgIcon component={YouTubeLogo} viewBox="0 0 40 40" />
                    </a>
                  </Box>
                </SocialLinks>
              </Grid>
            </IconsWrapper>
          </BoxLayer>
        </Grid>
      </Grid>
    </Root>
  )
}

export default SocialSection
