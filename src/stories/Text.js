import React from "react"
import PropTypes from "prop-types"
// import "./button.css"

/**
 * Primary UI component for user interaction
 */
export const Text = ({ dropCap, backgroundColor, text, ...props }) => {
  const mode = dropCap ? "storybook-text--dropcap" : "storybook-text"
  return (
    <div
      type="button"
      className={["storybook-text", mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
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

Button.defaultProps = {
  backgroundColor: null,
  dropCap: false,
}
