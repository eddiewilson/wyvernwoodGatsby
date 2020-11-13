import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderAnimation from "../components/headerAnimation"
import Intro from "../components/intro"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const Wrapper = styled.div``

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <SEO title="Home" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeaderAnimation />
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Intro />
          </Grid>
          <Grid item xs={12} md={6}>
            Newsletter section
          </Grid>
          <Grid item xs={12} md={6}>
            Social section
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  </Layout>
)

export default IndexPage
