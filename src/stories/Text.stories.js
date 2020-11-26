import React from "react"

import { Text } from "./Text"

export default {
  title: "Example/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

const Template = args => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  dropCap: false,
  text:
    "<p>Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.</p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.",
}
