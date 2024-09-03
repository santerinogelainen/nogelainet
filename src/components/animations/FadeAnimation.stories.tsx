import React from "react";
import FadeAnimation from "./FadeAnimation";
import { SBContentPlaceholder } from "../../utils/storybookUtils";
import { Meta, StoryObj } from "@storybook/react/*";

const Template = (args) => {
  return (
    <FadeAnimation {...args}>
      <SBContentPlaceholder />
    </FadeAnimation>
  );
};

const meta: Meta<typeof FadeAnimation> = {
  title: "Animations/FadeAnimation",
  component: FadeAnimation,
  render: Template,
};

export default meta;
type Story = StoryObj<typeof FadeAnimation>;

export const Default: Story = {
  args: {
    visible: false,
    speed: 400,
  },
};
