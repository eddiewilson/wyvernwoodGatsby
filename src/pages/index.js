import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimationSection from "../components/animationSection"
import Intro from "../components/intro"

import Grid from "@material-ui/core/Grid"
import NewsletterSection from "../components/newsletterSection"
import SocialSection from "../components/socialSection"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: `
    position: relative;
    z-index: 1;
  `,
})

const IndexPage = props => {
  const classes = useStyles(props)
  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.main}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <AnimationSection />
          </Grid>
          <Grid item xs={11} md={8}>
            <Intro />
          </Grid>
          <Grid item xs={11} md={6}>
            <NewsletterSection />
          </Grid>
          <Grid item xs={11} md={6}>
            <SocialSection />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}
export default IndexPage
