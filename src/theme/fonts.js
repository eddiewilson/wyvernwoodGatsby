// import { css } from "styled-components"

import lostaMasta from "../../static/fonts/lostamasta-regular-webfont.woff2"

const LostaMasta = {
  fontFamily: "losta_mastaregular",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('losta_mastaregular'),
    local('losta_mastaregular'),
    url(${lostaMasta}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

export default LostaMasta

// const primaryFont = css`
//     font-family: "Montserrat, sans-serif";
// `

// const secondaryFont = css`
//     font-family: "losta_mastaregular, serif";
// `

// const fs1 = css`
//     font-size: 80px;
//     @media ${props => props.theme.mq.sm} {

//     }
//     @media ${props => props.theme.mq.md} {
//       font-size: 6rem;
//       line-height: 4.8rem;
//     }
// `

// const fs1 = css`
//     font-size: 80px;
//     @media ${props => props.theme.mq.sm} {

//     }
//     @media ${props => props.theme.mq.md} {
//       font-size: 6rem;
//       line-height: 4.8rem;
//     }
// `

// const fs2 = css`
//     font-size: 60px;
//     @media ${props => props.theme.mq.sm} {

//     }
//     @media ${props => props.theme.mq.md} {
//       font-size: 6rem;
//       line-height: 4.8rem;
//     }
// `

// const fs3 = css`
//     font-size: 48px;
//     @media ${props => props.theme.mq.sm} {

//     }
//     @media ${props => props.theme.mq.md} {
//       font-size: 6rem;
//       line-height: 4.8rem;
//     }
// `

// const fs4 = css`
//     font-size: 38px;
//     @media ${props => props.theme.mq.sm} {

//     }
//     @media ${props => props.theme.mq.md} {
//       font-size: 6rem;
//       line-height: 4.8rem;
//     }
// `

// const fs5 = css`
//     font-size: 32px;
//     @media ${props => props.theme.mq.sm} {

//     }
//     @media ${props => props.theme.mq.md} {
//       font-size: 6rem;
//       line-height: 4.8rem;
//     }
// `

// const fsBase = css`
//     font-size: 20px;
//     @media ${props => props.theme.mq.sm} {

//     }
//     @media ${props => props.theme.mq.md} {
//       font-size: 6rem;
//       line-height: 4.8rem;
//     }
// `

// const fonts = {
//     primaryFont,
//     secondaryFont,
//     fs1,
//     fs2,
//     fs3,
//     fs4,
//     fs5,
//     fsBase
// }

// export default fonts
