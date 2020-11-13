import { createMuiTheme } from "@material-ui/core"
import { withTheme } from "styled-components"
import colors from "../theme/colors"
import LostaMasta from "../theme/fonts"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["OpenSans", "losta_mastaregular"].join(","),
    // color: colors.primaryFontColor,
    backgroundColor: "white",
    h1: {
      fontFamily: "losta_mastaregular",
      color: "white",
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    tertiary: {
      main: colors.tertiary,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [LostaMasta],
      },
    },
  },
})

export default theme
