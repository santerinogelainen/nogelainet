import React from "react";
import ConsoleContainer from "./ConsoleContainer";
import { SBContentPlaceholder } from "../../utils/storybookUtils";
import { Meta, StoryObj } from "@storybook/react/*";

const Template = (args) => {
  return (
    <ConsoleContainer {...args}>
      <SBContentPlaceholder size={200} />
    </ConsoleContainer>
  );
};

const meta: Meta<typeof ConsoleContainer> = {
  title: "Console/ConsoleContainer",
  component: ConsoleContainer,
};

export default meta;
type Story = StoryObj<typeof ConsoleContainer>;

export const Default: Story = {
  render: Template,
  args: {
    visible: true,
    activeTheme: "dark",
    activePage: "home",
  },
};
