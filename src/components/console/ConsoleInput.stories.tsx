import ConsoleInput from "./ConsoleInput";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof ConsoleInput> = {
  title: "Console/ConsoleInput",
  component: ConsoleInput,
};

export default meta;
type Story = StoryObj<typeof ConsoleInput>;

export const Default: Story = {
  args: {
    commands: {
      home: null,
      projects: null,
      about: null,
      contact: null,
    },
  },
};
