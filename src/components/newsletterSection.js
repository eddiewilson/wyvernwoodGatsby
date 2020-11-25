import React from "react"
import styled from "styled-components"
import {
  ThemeProvider,
  Typography,
  Box,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import bg from "../../static/images/bg2-intro@2x.png"

const Root = styled.div`
  position: relative;
  .background {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const FormInput = styled(Input)`
  border-radius: 50px;
  background: white;
`

const FormLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  justify-content: center;
  input {
    width: 100%;
  }
  button {
    border-radius: 50px;
    margin-top: ${props => props.theme.spacing(0.5)}px;
  }
  #email-signup-text {
    grid-column: span 2;
    text-align: center;
    color: white;
  }
`

const NewsletterSection = props => {
  console.log("Theem", theme)
  return (
    <Root>
      <div className="background"></div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={11} md={5}>
          <Box pt={4} pb={1}>
            <Box mb={2}>
              <Typography variant={"h2"} align={"center"}>
                Sign Up Today To Win Free Opening Week Tickets
              </Typography>
            </Box>
            <Typography variant={"body1"} align={"center"}>
              Quisque bibendum blandit nibh. Suspendi sse non commodo tellus. Ut
              pellentesque molestie tincidunt. Duis eget felis ligula.
            </Typography>

            <Box my={1}>
              <FormControl fullWidth>
                <ThemeProvider theme={theme}>
                  <FormLayout theme={theme}>
                    <div>
                      <InputLabel htmlFor="email-signup">
                        Email address
                      </InputLabel>
                      <FormInput
                        id="email-signup"
                        aria-describedby="email-signup-text"
                        fullWidth
                      />
                    </div>

                    <Button variant="contained" color="secondary">
                      Submit
                    </Button>
                    <FormHelperText id="email-signup-text">
                      We'll never share your email.
                    </FormHelperText>
                  </FormLayout>
                </ThemeProvider>
              </FormControl>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Root>
  )
}

export default NewsletterSection
