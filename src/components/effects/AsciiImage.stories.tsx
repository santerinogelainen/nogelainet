import AsciiImage, { AsciiImageRamp } from "./AsciiImage";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof AsciiImage> = {
  title: "Effects/AsciiImage",
  component: AsciiImage,
  argTypes: {
    ramp: {
      options: Object.values(AsciiImageRamp),
      mapping: AsciiImageRamp,
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AsciiImage>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/id/1003/1181/1772",
    maxSize: 100,
    ramp: AsciiImageRamp.Default,
    animate: false,
    speed: 5,
  },
};
