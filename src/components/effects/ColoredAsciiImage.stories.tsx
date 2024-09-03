import { AsciiImageRamp } from "./AsciiImage";
import ColoredAsciiImage from "./ColoredAsciiImage";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof ColoredAsciiImage> = {
  title: "Effects/ColoredAsciiImage",
  component: ColoredAsciiImage,
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
type Story = StoryObj<typeof ColoredAsciiImage>;

export const Default: Story = {
  args: {
    href: "https://picsum.photos/id/1003/1181/1772",
    maxSize: 250,
    fontSize: 10,
    ramp: AsciiImageRamp.Default,
  },
};
