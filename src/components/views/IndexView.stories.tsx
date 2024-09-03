import IndexView from "./IndexView";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof IndexView> = {
  title: "Views/Index",
  component: IndexView,
};

export default meta;
type Story = StoryObj<typeof IndexView>;

export const Default: Story = {
  args: {
    name: "Santeri",
    images: ["https://picsum.photos/200"],
  },
};
