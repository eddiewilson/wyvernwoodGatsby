import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Video from "./video"
import videoFile from "../../static/video/04 Website_intro_Loop_desktop_v2.mp4"
import mobileVideo from "../../static/video/WW_Website_intro_loop_mobile.mp4"
import HeaderHeading from "./headerHeading"

const useStyles = makeStyles(theme => ({
  root: `
    width: 100%;
    position: relative;
    z-index: -1;
    margin-bottom: -${theme.spacing(4)}px;
    h2{
      border: 2px solid red;
    }
  `,
}))

const HeaderAnimation = props => {
  const videoSrcUrl =
    useMediaQuery(theme => theme.breakpoints.up("sm")) === true
      ? videoFile
      : mobileVideo

  const showHeading =
    useMediaQuery(theme => theme.breakpoints.up("sm")) === true ? (
      ""
    ) : (
      <HeaderHeading />
    )

  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Video
        className={classes.video}
        videoSrcURL={videoSrcUrl}
        videoTitle="WyvernWood Title"
      />
      {showHeading}
    </div>
  )
}

export default HeaderAnimation
