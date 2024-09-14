import HackerBackground from "./HackerBackground";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof HackerBackground> = {
  title: "Backgrounds/HackerBackground",
  component: HackerBackground,
};

export default meta;
type Story = StoryObj<typeof HackerBackground>;

export const Default: Story = {};
