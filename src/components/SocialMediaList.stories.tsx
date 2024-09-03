import SocialMediaList from "./SocialMediaList";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof SocialMediaList> = {
  title: "Components/SocialMediaList",
  component: SocialMediaList,
};

export default meta;
type Story = StoryObj<typeof SocialMediaList>;

export const Default: Story = {
  args: {
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
