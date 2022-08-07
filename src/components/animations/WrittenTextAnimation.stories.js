import React from "react";
import { SBEnumControl, SBRangeControl } from "../../utils/storybookUtils";
import WrittenTextAnimation, { WrittenTextAnimationState } from "./WrittenTextAnimation"

export default {
  title: "Animations/WrittenTextAnimation",
  component: WrittenTextAnimation,
  argTypes: {
    speed: SBRangeControl(1, 250),
    state: SBEnumControl(WrittenTextAnimationState)
  }
}

const Template = (args) => {
  return (
    <WrittenTextAnimation {...args} />
  )
}

export const Default = Template.bind({});

Default.args = {
  text: "Testi testi testi testi testi...",
  state: WrittenTextAnimationState.Enabled,
  loop: true,
  speed: 30,
  onStart: null,
  onEnd: null
};