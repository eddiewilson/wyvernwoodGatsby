import React from "react"
import styled from "styled-components"
// import { makeStyles } from "@material-ui/core/styles"
import { Box, Grid } from "@material-ui/core"

import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image"

const Root = styled.footer`
  .gatsby-image-wrapper {
    width: 286px;
    height: 159px;
  }
`
const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      file(
        name: { eq: "Wyvernwood_Primary_Full_Colour_Logo__WITH LOCKUP_CMYK" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Root>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={11} md={11}>
          <Box my={1}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="WyvernWood Logo"
            />
          </Box>
        </Grid>
      </Grid>
    </Root>
  )
}

export default Footer
