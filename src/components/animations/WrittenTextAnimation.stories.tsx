import { SBEnumControl, SBRangeControl } from "../../utils/storybookUtils";
import WrittenTextAnimation, {
  WrittenTextAnimationState,
} from "./WrittenTextAnimation";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof WrittenTextAnimation> = {
  title: "Animations/WrittenTextAnimation",
  component: WrittenTextAnimation,
  argTypes: {
    speed: SBRangeControl(1, 250),
    state: SBEnumControl(WrittenTextAnimationState),
  },
};

export default meta;
type Story = StoryObj<typeof WrittenTextAnimation>;

export const Default: Story = {
  args: {
    text: "Testi testi testi testi testi...",
    state: WrittenTextAnimationState.Enabled,
    loop: true,
    speed: 30,
  },
};
