import React from "react"
import FacebookLogo from "../../static/svgs/inline/icon_facebook.svg"
import InstagramLogo from "../../static/svgs/inline/icon_instagram.inline.svg"
import YouTubeLogo from "../../static/svgs/inline/icon_YouTube.inline.svg"

import { Typography, Box, Grid, SvgIcon } from "@material-ui/core"

import bg from "../../static/images/bg-4-social@2x.png"
import styled from "styled-components"

import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../gatsby-theme-material-ui-top-layout/theme"

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
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  a{
    svg {
      width: 40px;
      height: 40px;
    path {
      fill: ${props => props.theme.palette.secondary.main}
      }
    }
    &:hover{
      path {
        fill: ${props => props.theme.palette.primary.main}
      }
        }
      }
  }
  }
  
`

const SocialSection = props => {
  return (
    <Root>
      <div className="background"></div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={11} md={6}>
          <Box my={4}>
            <Box mb={2}>
              <Typography variant={"h2"} align={"center"}>
                Follow Our Story So Far On Social.
              </Typography>
            </Box>
            <Typography variant={"body1"} align={"center"}>
              Quisque bibendum blandit nibh. Suspendi sse non commodo tellus. Ut
              pellentesque molestie tincidunt. Duis eget felis ligula.
            </Typography>
            <Box my={2}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <ThemeProvider theme={theme}>
                  <SocialLinks theme={theme}>
                    <Box component="span" mx={1}>
                      <a href="social.com">
                        <SvgIcon component={FacebookLogo} viewBox="0 0 40 40" />
                      </a>
                    </Box>
                    <Box component="span" mx={1}>
                      <a href="social.com">
                        {" "}
                        <SvgIcon
                          component={InstagramLogo}
                          viewBox="0 0 40 40"
                        />
                      </a>
                    </Box>
                    <Box component="span" mx={1}>
                      <a href="social.com">
                        {" "}
                        <SvgIcon component={YouTubeLogo} viewBox="0 0 40 40" />
                      </a>
                    </Box>
                  </SocialLinks>
                </ThemeProvider>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Root>
  )
}

export default SocialSection
