import ConsoleMenu from "./ConsoleMenu";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof ConsoleMenu> = {
  title: "Console/ConsoleMenu",
  component: ConsoleMenu,
};

export default meta;
type Story = StoryObj<typeof ConsoleMenu>;

export const Default: Story = {
  args: {
    visible: false,
    activeItem: "home",
  },
};
