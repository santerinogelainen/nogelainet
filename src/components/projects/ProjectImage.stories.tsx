import ProjectImage from "./ProjectImage";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof ProjectImage> = {
  title: "Components/ProjectImage",
  component: ProjectImage,
};

export default meta;
type Story = StoryObj<typeof ProjectImage>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/500",
  },
};
