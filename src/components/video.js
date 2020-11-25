import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core/styles"

const Root = withTheme(styled.div`
  padding-bottom: 56.25%;
  height: 0;
  width: 100vw;
  video {
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
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
