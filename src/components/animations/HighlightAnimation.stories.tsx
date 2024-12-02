import HighlightAnimation from "./HighlightAnimation";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof HighlightAnimation> = {
  title: "Animations/HighlightAnimation",
  component: HighlightAnimation,
};

export default meta;
type Story = StoryObj<typeof HighlightAnimation>;

export const Default: Story = {
  args: {
    word: "Testi",
    start: false,
    visible: false,
  },
};
