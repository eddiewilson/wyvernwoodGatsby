import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: `
      max-width: 100%;  
`,
}))

const Video = ({ videoSrcURL, props }) => {
  const classes = useStyles(props)
  return (
    <video className={classes.root} muted autoPlay loop>
      <source src={videoSrcURL} type="video/mp4" />
    </video>
  )
}
export default Video
