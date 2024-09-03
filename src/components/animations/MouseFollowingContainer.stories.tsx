import React from "react";
import MouseFollowingContainer from "./MouseFollowingContainer";
import { Anchor, AnchorSBArgs } from "../../models/anchor";
import { SBContentPlaceholder } from "../../utils/storybookUtils";
import { Meta, StoryObj } from "@storybook/react/*";

const Template = (args) => {
  return (
    <MouseFollowingContainer {...args}>
      <SBContentPlaceholder size={200} />
    </MouseFollowingContainer>
  );
};

const meta: Meta<typeof MouseFollowingContainer> = {
  title: "Animations/MouseFollowingContainer",
  component: MouseFollowingContainer,
  render: Template,
  argTypes: {
    anchor: AnchorSBArgs,
  },
};

export default meta;
type Story = StoryObj<typeof MouseFollowingContainer>;

export const Default: Story = {
  args: {
    enabled: true,
    rotate: false,
    anchor: Anchor.Center,
  },
};
