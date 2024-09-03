import ContactView from "./ContactView";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof ContactView> = {
  title: "Views/Contact",
  component: ContactView,
};

export default meta;
type Story = StoryObj<typeof ContactView>;

export const Default: Story = {
  args: {
    email: "santeri.nogelainen@gmail.com",
    socials: [
      {
        key: "instagram",
        name: "Instagram",
        url: "https://www.instagram.com/santerinogelainen/",
        username: "santerinogelainen",
      },
    ],
  },
};
