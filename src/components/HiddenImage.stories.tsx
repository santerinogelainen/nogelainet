import HiddenImage from "./HiddenImage";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof HiddenImage> = {
  title: "Components/HiddenImage",
  component: HiddenImage,
};

export default meta;
type Story = StoryObj<typeof HiddenImage>;

export const Default: Story = {
  args: {
    visible: false,
    images: [
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
    ],
  },
};
