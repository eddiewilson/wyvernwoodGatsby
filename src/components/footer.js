import React from "react"
import styled from "styled-components"
import bg from "../../static/images/bg5-footer@2x.png"
import { Box, Grid, withTheme } from "@material-ui/core"

import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image"

const Root = withTheme(styled.footer`
  margin-bottom: ${props => props.theme.spacing(2)}px;
  .gatsby-image-wrapper {
    width: 295px;
    height: auto;
  }
  background-image: url(${bg});
  background-size: 184px 174px;
  background-position: bottom right;
  background-repeat: no-repeat;
`)

const Credit = styled.p`
  color: white;
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
          <Box mt={1} mb={2} pb={3}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="WyvernWood Logo"
            />
          </Box>
          <Credit>© 2020. Wyvernwood. All Rights Reserved. </Credit>
        </Grid>
      </Grid>
    </Root>
  )
}

export default Footer
