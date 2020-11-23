import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { palette, breakpoints } from "@material-ui/system"
import styled from "styled-components"

const Root = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-height: 3000px;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
  display: none;
  /* background-color: ${palette.primary};
  @media only screen and (max-width: 600px) {
    background-color: red;
  } */
`

console.log("breakys", breakpoints)

const useStyles = makeStyles(theme => ({
  root: `
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      min-height: 3000px;
      position: absolute;
      z-index: -1;
    //   background-color: blue;
    //     @media only screen and (max-width: 600px) {
    //       background-color: red;
    //     }
    }
`,
}))

const BackgroundLeaves = props => {
  const classes = useStyles(props)

  return (
    <Root
      className={classes.root}
      style={{
        backgroundImage: "url(" + props.background + ")",
      }}
    ></Root>
  )
}
export default BackgroundLeaves
