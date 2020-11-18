import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: `
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      min-height: 3000px;
      position: absolute;
      z-index: 0;
    }
`,
}))

const BackgroundLeaves = props => {
  const classes = useStyles(props)

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: "url(" + props.background + ")",
      }}
    ></div>
  )
}
export default BackgroundLeaves
