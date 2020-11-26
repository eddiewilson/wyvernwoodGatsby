import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core/styles"

const Root = withTheme(styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  video {
    min-height: 100%;
    min-width: 100%;
    transform: scale(1.5);
    ${props => props.theme.breakpoints.up("sm")} {
      height: 100vh;
      transform: scale(1);
    }
  }
`)

const Video = props => {
  return (
    <Root {...props}>
      <video
        id="bgVideo"
        muted
        autoPlay
        loop
        playsInline
        style={{ width: `100%` }}
      >
        <source src={props.videoSrcURL} type={props.fileType} />
      </video>
    </Root>
  )
}
export default Video
