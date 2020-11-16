import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimationSection from "../components/animationSection"
import Intro from "../components/intro"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import NewsletterSection from "../components/newsletterSection"
import SocialSection from "../components/socialSection"

const Wrapper = styled.div``

const Main = styled.div`
  position: relative;
  z-index: 1;
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <SEO title="Home" />
      <Grid container>
        <Grid item xs={12}>
          <AnimationSection />
        </Grid>
      </Grid>
      <Main>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={11} md={12}>
            <Intro />
          </Grid>
          <Grid item xs={11} md={6}>
            <NewsletterSection />
          </Grid>
          <Grid item xs={11} md={6}>
            <SocialSection />
          </Grid>
        </Grid>
      </Main>
    </Wrapper>
  </Layout>
)

export default IndexPage
