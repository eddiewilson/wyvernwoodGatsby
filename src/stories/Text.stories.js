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
  text: "Default Text, lorem ipsum doler sit",
}
