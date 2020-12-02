import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// const TextWrapper = styled.div`
//   ${({ props, theme }) => `
//    p {
//       &:first-child {
//         margin-top: 0;
//       }
//     }
//     &.storybook-text--dropcap {
//       p {
//         &:first-child {
//           margin-top: 0;
//           &:first-letter {
//             float: left;
//             line-height: 0.65;
//             margin: 1rem 1rem 1rem 0;
//             font-size: 6rem;
//             ${props => props.theme.typography.dropCap};
//           }
//         }
//       }
//       &:before,
//       &:after {
//         content: "";
//         display: block;
//       }
//       &:before {
//         margin-top: -0.2em;
//       }
//       &:after {
//         margin-bottom: -0.15em;
//       }
//     }
//     &.storybook-text--columnCount {
//       column-fill: balance;
//       column-gap: ${props => props.theme.spacing(2)}px;
//       column-count: ${props => props.columnCount};
//       ${props => props.theme.breakpoints.up("sm")} {
//       }
//     }
//   `}
// `

const TextWrapper = styled.div`
  p {
    &:first-child {
      margin-top: 0;
    }
  }
  &.storybook-text--dropcap {
    p {
      &:first-child {
        margin-top: 0;
        &:first-letter {
          float: left;
          line-height: 0.65;
          margin: 1rem 1rem 1rem 0;
          font-size: 6rem;
          ${props => props.theme.typography.dropCap};
        }
      }
    }
    &:before,
    &:after {
      content: "";
      display: block;
    }
    &:before {
      margin-top: -0.2em;
    }
    &:after {
      margin-bottom: -0.15em;
    }
  }
  &.storybook-text--columnCount {
    column-fill: balance;
    column-gap: ${props => props.theme.spacing(2)}px;
  }
  // TODO: This is a super clunky implementation but cannot work out how to pass props into withStyles()?
  &.storybook-text--columnCount-2 {
    column-count: 1;
    ${props => props.theme.breakpoints.up("sm")} {
      column-count: 2;
    }
  }
  &.storybook-text--columnCount-3 {
    column-count: 1;
    ${props => props.theme.breakpoints.up("sm")} {
      column-count: 3;
    }
  }
  &.storybook-text--columnCount-4 {
    column-count: 1;
    ${props => props.theme.breakpoints.up("sm")} {
      column-count: 4;
    }
  }
`

export const Text = ({ dropCap, text, columnCount, ...props }) => {
  const classes = ["storybook-text"]
  const mode = dropCap ? "storybook-text--dropcap" : ""
  const columns = columnCount
    ? `storybook-text--columnCount storybook-text--columnCount-${columnCount}`
    : ""

  classes.push(mode, columns)

  return (
    <TextWrapper
      className={[...classes].join(" ")}
      {...props}
      dangerouslySetInnerHTML={{ __html: text }}
      datacolumn={columnCount}
    ></TextWrapper>
  )
}

Text.propTypes = {
  dropCap: PropTypes.bool,
  columnCount: PropTypes.number,
  text: PropTypes.string.isRequired,
}

Text.defaultProps = {
  dropCap: false,
  columnCount: 1,
}
