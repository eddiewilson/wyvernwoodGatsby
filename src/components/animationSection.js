import React from "react"
import { withTheme, useMediaQuery } from "@material-ui/core/"
import styled from "styled-components"

import bgVideo from "../../static/images/bg1-video@2x.png"
import Video from "./video"
import desktopVideo from "../../static/video/Wyvernwood00282Btest.mp4"
import mobileVideo from "../../static/video/WW_Website_intro_loop_AWA_mobile.mp4"

const Root = withTheme(styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 65vh;
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
  }
`)

const HeaderAnimation = props => {
  const videoSrcUrl = useMediaQuery(theme => theme.breakpoints.up("sm")) ? (
    <Video
      videoSrcURL={desktopVideo}
      videoTitle="WyvernWood Title"
      fileType="video/mp4"
    />
  ) : (
    <Video
      videoSrcURL={mobileVideo}
      videoTitle="WyvernWood Title"
      fileType="video/mp4"
    />
  )

  return (
    <Root>
      <div className="background"></div>
      {videoSrcUrl}
    </Root>
  )
}

export default HeaderAnimation
