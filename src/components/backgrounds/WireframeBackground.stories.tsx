import WireframeBackground from "./WireframeBackground";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof WireframeBackground> = {
  title: "Backgrounds/WireframeBackground",
  component: WireframeBackground,
};

export default meta;
type Story = StoryObj<typeof WireframeBackground>;

export const Default: Story = {};
