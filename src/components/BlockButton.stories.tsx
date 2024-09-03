import BlockButton from "./BlockButton";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof BlockButton> = {
  title: "Components/BlockButton",
  component: BlockButton,
};

export default meta;
type Story = StoryObj<typeof BlockButton>;

export const Default: Story = {
  args: {
    text: "Tekstiä tähän.",
  },
};
