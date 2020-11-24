import { createMuiTheme } from "@material-ui/core"
import colors from "../theme/colors"
import LostaMasta from "../theme/fonts"

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Montserrat", "losta_mastaregular"].join(","),
    // color: colors.primaryFontColor
    h1: {
      fontFamily: "losta_mastaregular",
      color: "white",
      fontSize: "2.375rem",
      lineheight: "3rem",

      "@media (min-width:600px)": {
        fontSize: "3.333rem",
      },
    },
    h2: {
      fontFamily: "losta_mastaregular",
      color: "white",
      fontSize: "2.555rem",
    },
    body1: {
      color: "white",
    },
  },
  spacing: 30,
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    tertiary: {
      main: "#1b474d",
    },
    textSecondary: "white",
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
