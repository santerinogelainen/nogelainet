import { Meta, StoryObj } from "@storybook/react";
import ProjectsView from "./ProjectsView";

const meta: Meta<typeof ProjectsView> = {
  title: "Views/Projects",
  component: ProjectsView,
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {};
