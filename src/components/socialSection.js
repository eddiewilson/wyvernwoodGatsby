import React from "react"
import { Typography, Box } from "@material-ui/core"

const SocialSection = () => {
  return (
    <Box my={4}>
      <Box mb={2}>
        <Typography variant={"h2"} align={"center"}>
          Follow Our Story So Far On Social.
        </Typography>
      </Box>
      <Typography variant={"body1"} align={"center"}>
        Quisque bibendum blandit nibh. Suspendi sse non commodo tellus. Ut
        pellentesque molestie tincidunt. Duis eget felis ligula.
      </Typography>
    </Box>
  )
}

export default SocialSection
