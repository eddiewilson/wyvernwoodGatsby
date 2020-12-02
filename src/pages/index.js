import React from "react"
import { Grid, makeStyles } from "@material-ui/core/"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimationSection from "../components/animationSection"
import Intro from "../components/intro"
import SocialSection from "../components/socialSection"
import { Text } from "../stories/Text"

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
        <Grid item xs={11} md={6}>
          <Text
            dropCap="true"
            columnCount={2}
            text="<p>somemore thext ojfiuhiwfhiwehf pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p><p>Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>"
          />
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
