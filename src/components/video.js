import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  video {
    max-width: 100%;
  }
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <Wrapper>
    <video muted autoPlay loop>
      <source src={videoSrcURL} type="video/mp4" />
    </video>
  </Wrapper>
)
export default Video
