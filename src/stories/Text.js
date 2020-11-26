import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

/**
 * Primary UI component for user interaction
 */

const TextWrapper = styled.div`
  &.storybook-text--dropcap {
    p {
      &:first-child {
        &:first-letter {
          float: left;
          font-size: 6rem;
          line-height: 0.65;
          margin: 0.1em 0.1em 0.2em 0;
        }
      }
    }
  }
`

export const Text = ({ dropCap, backgroundColor, text, ...props }) => {
  const mode = dropCap ? "storybook-text--dropcap" : "storybook-text"
  return (
    <TextWrapper
      className={["storybook-text", mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
      dangerouslySetInnerHTML={{ __html: text }}
    ></TextWrapper>
  )
}

Text.propTypes = {
  /**
   * Should this be dropcapped?
   */
  dropCap: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,

  /**
   * Text content
   */
  text: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
}

Text.defaultProps = {
  backgroundColor: null,
  dropCap: false,
}
