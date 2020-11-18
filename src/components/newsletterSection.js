import React from "react"
import { Typography, Box } from "@material-ui/core"

const NewsletterSection = () => {
  return (
    <Box my={4}>
      <Box mb={2}>
        <Typography variant={"h2"} align={"center"}>
          Sign Up Today To Win Free Opening Week Tickets
        </Typography>
      </Box>
      <Typography variant={"body1"} align={"center"}>
        Quisque bibendum blandit nibh. Suspendi sse non commodo tellus. Ut
        pellentesque molestie tincidunt. Duis eget felis ligula.
      </Typography>
      <form>
        <input type="email"></input>
        <input type="submit"></input>
      </form>
    </Box>
  )
}

export default NewsletterSection
