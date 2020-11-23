import React from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import styled from "styled-components"

import bgVideo from "../../static/images/bg1-video@2x.png"

import Video from "./video"
import videoFile from "../../static/video/04 Website_intro_Loop_desktop_v2.mp4"
// import mobileVideo from "../../static/video/WW_Website_intro_loop_mobile.mp4"
// import test from "../../static/video/test.webm"
import HeaderHeading from "./headerHeading"

const Root = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    .background{
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      z-index: 0;
      background-image: url(${bgVideo});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
`

const HeaderAnimation = props => {
  const videoSrcUrl =
    useMediaQuery(theme => theme.breakpoints.up("sm")) === true
      ? videoFile
      : videoFile

  const showHeading =
    useMediaQuery(theme => theme.breakpoints.up("sm")) === true ? (
      ""
    ) : (
      <HeaderHeading />
    )

  // const classes = useStyles(props)
  return (
    <Root>
      <div className="background"></div>
      <Video
        videoSrcURL={videoSrcUrl}
        videoTitle="WyvernWood Title"
      />
      {showHeading}
    </Root>
  )
}

export default HeaderAnimation
