import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: `
    
  `,
}))

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
