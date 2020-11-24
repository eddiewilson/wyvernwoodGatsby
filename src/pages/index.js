import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimationSection from "../components/animationSection"
import Intro from "../components/intro"

import Grid from "@material-ui/core/Grid"
import SocialSection from "../components/socialSection"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: `
    position: relative;
    //z-index: 1;
  `,
})

const IndexPage = props => {
  const classes = useStyles(props)
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs>
          <AnimationSection />
        </Grid>
      </Grid>
      <div className={classes.main}>
        <Intro />
        {/* <NewsletterSection /> */}
        <SocialSection />
      </div>
    </Layout>
  )
}
export default IndexPage
