import React from "react"
import { withTheme } from "@material-ui/core/"
import styled from "styled-components"
// import { useBreakpoint } from "gatsby-plugin-breakpoints"

import bgVideo from "../../static/images/bg1-video@2x.png"
import Video from "./video"
import desktopVideo from "../../static/video/WW_Website_intro_loop_AWA_desktop.mp4"
// import mobileVideo from "../../static/video/WW_Website_intro_loop_AWA_mobile.mp4"

const Root = withTheme(styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 65vh;
  margin-top: ${props => props.theme.spacing(3)}px;
  .background {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    ${props => props.theme.breakpoints.up("sm")} {
      background: url(${bgVideo});
      background-repeat: no-repeat;
      background-size: contain;
      height: 100vh;
    }
  }
  ${props => props.theme.breakpoints.up("sm")} {
    height: 100vh;
    margin-top: 0;
  }
`)

const HeaderAnimation = props => {
  return (
    <Root>
      <div className="background"></div>
      <Video
        videoSrcURL={desktopVideo}
        videoTitle="WyvernWood Title"
        fileType="video/mp4"
      />
    </Root>
  )
}

export default HeaderAnimation
