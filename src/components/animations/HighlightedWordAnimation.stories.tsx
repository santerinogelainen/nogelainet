import HighlightedWordAnimation from "./HighlightedWordAnimation";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof HighlightedWordAnimation> = {
  title: "Animations/HighlightedWordAnimation",
  component: HighlightedWordAnimation,
};

export default meta;
type Story = StoryObj<typeof HighlightedWordAnimation>;

export const Default: Story = {
  args: {
    word: "Testi",
    start: false,
    visible: false,
  },
};
