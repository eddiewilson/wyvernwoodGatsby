import { css } from "styled-components"

const primaryFont = css`
    font-family: "Montserrat, sans-serif";
`

const secondaryFont = css`
    font-family: "losta_mastaregular, serif";
`

const fs1 = css`
    font-size: 80px;
    @media ${props => props.theme.mq.sm} {
      
    }
    @media ${props => props.theme.mq.md} {
      font-size: 6rem;
      line-height: 4.8rem;
    }
`


const fs1 = css`
    font-size: 80px;
    @media ${props => props.theme.mq.sm} {
      
    }
    @media ${props => props.theme.mq.md} {
      font-size: 6rem;
      line-height: 4.8rem;
    }
`

const fs2 = css`
    font-size: 60px;
    @media ${props => props.theme.mq.sm} {
      
    }
    @media ${props => props.theme.mq.md} {
      font-size: 6rem;
      line-height: 4.8rem;
    }
`

const fs3 = css`
    font-size: 48px;
    @media ${props => props.theme.mq.sm} {
      
    }
    @media ${props => props.theme.mq.md} {
      font-size: 6rem;
      line-height: 4.8rem;
    }
`

const fs4 = css`
    font-size: 38px;
    @media ${props => props.theme.mq.sm} {
      
    }
    @media ${props => props.theme.mq.md} {
      font-size: 6rem;
      line-height: 4.8rem;
    }
`

const fs5 = css`
    font-size: 32px;
    @media ${props => props.theme.mq.sm} {
      
    }
    @media ${props => props.theme.mq.md} {
      font-size: 6rem;
      line-height: 4.8rem;
    }
`

const fsBase = css`
    font-size: 20px;
    @media ${props => props.theme.mq.sm} {
      
    }
    @media ${props => props.theme.mq.md} {
      font-size: 6rem;
      line-height: 4.8rem;
    }
`

const fonts = {
    primaryFont,
    secondaryFont,
    fs1,
    fs2,
    fs3,
    fs4,
    fs5,
    fsBase
}

export default fonts