import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { withTheme, Typography } from "@material-ui/core"

const TextWrapper = withTheme(styled(Typography)`
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
          margin: 0.1em 0.1em 0.2em 0;
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
    ${props => props.theme.breakpoints.up("sm")} {
      column-count: 1;
    }
  }
`)

export const Text = ({
  dropCap,
  backgroundColor,
  text,
  columnCount,
  ...props
}) => {
  const classes = ["storybook-text"]
  const mode = dropCap ? "storybook-text--dropcap" : ""
  const columns = columnCount ? "storybook-text--columnCount" : ""

  classes.push(mode, columns)

  return (
    <TextWrapper
      className={[...classes].join(" ")}
      style={columnCount && { columnCount }}
      {...props}
      variant={"body1"}
      dangerouslySetInnerHTML={{ __html: text }}
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
