import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core/styles"

const Root = withTheme(styled.div`
  position: relative;
  z-index: 0;
  max-width: 100%;
  video {
    height: auto;
    max-width: 100%;
    object-fit: cover;
    position: relative;
    z-index: -1;
    max-height: 100vh;
    width: 100%;
  }
`)

const Video = props => {
  return (
    <Root {...props}>
      <video id="bgVideo" muted autoPlay loop playsInline>
        <source src={props.videoSrcURL} type={props.fileType} />
      </video>
    </Root>
  )
}
export default Video
