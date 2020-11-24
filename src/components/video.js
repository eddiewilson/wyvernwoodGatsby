import React, { useEffect } from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core/styles"

const Root = withTheme(styled.div`
  position: relative;
  z-index: 0;
  max-width: 100%;
  video {
    max-width: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }
  canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999999;
  }
`)

const Video = props => {
  useEffect(() => {
    renderCanvas()
  }, [])

  const renderCanvas = () => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    const video = document.getElementById("bgVideo")

    video.addEventListener("play", () => {
      function step() {
        debugger
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        requestAnimationFrame(step)
        applyColour(ctx)
      }
      requestAnimationFrame(step)
    })
  }

  const applyColour = ctx => {
    const c = ctx.getImageData(1, 1, 1, 1).data

    let colour = [...c]
    colour.pop()
    colour = colour.toString()

    document.querySelector("body").style.backgroundColor = `rgb(${colour})`
  }
  console.log("props", props)
  return (
    <Root {...props}>
      <canvas id="canvas" width="1440" height="900"></canvas>
      <video id="bgVideo" muted autoPlay loop playsInline>
        <source src={props.videoSrcURL} type={props.fileType} />
      </video>
    </Root>
  )
}
export default Video
