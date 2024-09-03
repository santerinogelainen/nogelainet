import AboutView from "./AboutView";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof AboutView> = {
  title: "Views/About",
  component: AboutView,
};

export default meta;
type Story = StoryObj<typeof AboutView>;

export const Default: Story = {
  args: {},
};
