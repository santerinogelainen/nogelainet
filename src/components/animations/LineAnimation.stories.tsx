import React from "react";
import LineAnimation from "./LineAnimation";
import { Anchor, AnchorSBArgs } from "../../models/anchor";
import { SBContentPlaceholder } from "../../utils/storybookUtils";
import { Meta, StoryObj } from "@storybook/react/*";

const Template = (args) => {
  return (
    <LineAnimation {...args}>
      <SBContentPlaceholder size={200} />
    </LineAnimation>
  );
};

const meta: Meta<typeof LineAnimation> = {
  title: "Animations/LineAnimation",
  component: LineAnimation,
  render: Template,
  argTypes: {
    anchor1: AnchorSBArgs,
    anchor2: AnchorSBArgs,
  },
};

export default meta;
type Story = StoryObj<typeof LineAnimation>;

export const Default: Story = {
  args: {
    visible: false,
    speed: 600,
    anchor1: Anchor.TopLeft,
    anchor2: Anchor.BottomRight,
  },
};
