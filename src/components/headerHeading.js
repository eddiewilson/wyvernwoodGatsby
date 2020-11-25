import React from "react"
import { Typography, makeStyles } from "@material-ui/core"

const HeaderHeading = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Typography variant={"h2"} align={"center"}>
        Another world awaits
      </Typography>
    </div>
  )
}

export default HeaderHeading
