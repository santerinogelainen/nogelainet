import Loader from "./Loader";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    speed: 180,
  },
};
