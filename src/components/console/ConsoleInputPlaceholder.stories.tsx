import ConsoleInputPlaceholder from "./ConsoleInputPlaceholder";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof ConsoleInputPlaceholder> = {
  title: "Console/ConsoleInputPlaceholder",
  component: ConsoleInputPlaceholder,
};

export default meta;
type Story = StoryObj<typeof ConsoleInputPlaceholder>;

export const Default: Story = {
  args: {
    enabled: true,
    delay: 1000,
    helpTexts: [
      "Help1 Help1 Help1 Help1 Help1 Help1 Help1 Help1",
      "Help2 Help2 Help2 Help2 Help2 Help2 Help2 Help2",
      "Help3 Help3 Help3 Help3 Help3 Help3 Help3 Help3",
    ],
  },
};
