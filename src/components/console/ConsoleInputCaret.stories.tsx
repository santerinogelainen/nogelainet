import ConsoleInputCaret from "./ConsoleInputCaret";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof ConsoleInputCaret> = {
  title: "Console/ConsoleInputCaret",
  component: ConsoleInputCaret,
};

export default meta;
type Story = StoryObj<typeof ConsoleInputCaret>;

export const Default: Story = {
  args: {
    enabled: true,
    speed: 600,
  },
};
