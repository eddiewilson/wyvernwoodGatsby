import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Video from "./video"
import videoFile from "../../static/video/04 Website_intro_Loop_desktop_v2.mp4"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    position: "relative",
    zIndex: "-1",
  },
  video: {
    transform: "scale(1.5)",
  },
}))

const HeaderAnimation = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Video
        className={classes.video}
        videoSrcURL={videoFile}
        videoTitle="WyvernWood Title"
      />
    </div>
  )
}

export default HeaderAnimation
