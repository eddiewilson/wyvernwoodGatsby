import React from "react"
import { Grid, makeStyles } from "@material-ui/core/"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimationSection from "../components/animationSection"
import Intro from "../components/intro"
import SocialSection from "../components/socialSection"

const useStyles = makeStyles({
  root: `
    position: relative;
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
