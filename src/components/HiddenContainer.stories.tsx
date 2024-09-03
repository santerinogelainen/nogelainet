import React from "react";
import HiddenContainer from "./HiddenContainer";
import { SBContentPlaceholder } from "../utils/storybookUtils";
import { Meta, StoryObj } from "@storybook/react/*";
import { Anchor } from "../models/anchor";

const Template = (args) => {
  return (
    <HiddenContainer {...args}>
      <SBContentPlaceholder />
    </HiddenContainer>
  );
};

const meta: Meta<typeof HiddenContainer> = {
  title: "Components/HiddenContainer",
  component: HiddenContainer,
};

export default meta;
type Story = StoryObj<typeof HiddenContainer>;

export const Default: Story = {
  render: Template,
  args: {
    visible: false,
    anchor: Anchor.Center,
  },
};
