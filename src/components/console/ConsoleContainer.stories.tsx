import React from "react";
import ConsoleContainer from "./ConsoleContainer";
import { SBContentPlaceholder } from "../../utils/storybookUtils";
import { Commands, CommandsSBArgs } from "../../models/commands";
import { Themes, ThemesSBArgs } from "../../models/themes";
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
  argTypes: {
    activePage: CommandsSBArgs,
    activeTheme: ThemesSBArgs,
  },
};

export default meta;
type Story = StoryObj<typeof ConsoleContainer>;

export const Default: Story = {
  render: Template,
  args: {
    visible: true,
    commands: {
      home: null,
      projects: null,
      about: null,
    },
    activeTheme: Themes.Dark,
    activePage: Commands.Home,
  },
};
