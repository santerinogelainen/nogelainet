import ConsoleMenu from "./ConsoleMenu";
import { Commands, CommandsSBArgs } from "../../models/commands";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof ConsoleMenu> = {
  title: "Console/ConsoleMenu",
  component: ConsoleMenu,
  argTypes: {
    activeItem: CommandsSBArgs,
  },
};

export default meta;
type Story = StoryObj<typeof ConsoleMenu>;

export const Default: Story = {
  args: {
    visible: false,
    activeItem: Commands.Home,
  },
};
