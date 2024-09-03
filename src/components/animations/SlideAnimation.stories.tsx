import React from "react";
import SlideAnimation from "./SlideAnimation";
import { Direction, DirectionSBArgs } from "../../models/direction";
import { SBContentPlaceholder } from "../../utils/storybookUtils";
import { Meta, StoryObj } from "@storybook/react/*";

const Template = (args) => {
  return (
    <SlideAnimation {...args}>
      <SBContentPlaceholder />
    </SlideAnimation>
  );
};

const meta: Meta<typeof SlideAnimation> = {
  title: "Animations/SlideAnimation",
  component: SlideAnimation,
  render: Template,
  argTypes: {
    to: DirectionSBArgs,
    from: DirectionSBArgs,
  },
};

export default meta;
type Story = StoryObj<typeof SlideAnimation>;

export const OpenByDefault: Story = {
  args: {
    open: true,
    speed: 400,
    from: Direction.Left,
    to: Direction.Right,
  },
};

export const ClosedByDefault: Story = {
  args: {
    open: false,
    speed: 400,
    from: Direction.Left,
    to: Direction.Right,
  },
};
