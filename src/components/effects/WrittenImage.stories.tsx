import WrittenImage from "./WrittenImage";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof WrittenImage> = {
  title: "Effects/WrittenImage",
  component: WrittenImage,
};

export default meta;
type Story = StoryObj<typeof WrittenImage>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/id/1003/1181/1772",
    maxSize: 100,
    speed: 200,
  },
};
