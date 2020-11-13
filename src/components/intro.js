import React from "react"
import styled from "styled-components"
import { Typography } from "@material-ui/core"

const Wrapper = styled.div``

const Intro = () => {
  return (
    <Wrapper>
      <Typography
        variant={"h1"}
        align={"center"}
        color={"primary.contrastText"}
      >
        Aenean acdo bibendum blandit nibh. Suspendisse non commodo tellus.
        Pellentesque molestie tincidunt.
      </Typography>
    </Wrapper>
  )
}

export default Intro
